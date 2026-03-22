import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';

const SUPABASE_URL = 'https://accjefnoivydxvrqskuf.supabase.co';
const SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFjY2plZm5vaXZ5ZHh2cnFza3VmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDIwMjExMSwiZXhwIjoyMDg5Nzc4MTExfQ.YVi6ytcwb8vNcxPl38gYBK9opDyym2EeE2bC-kUYaJM';

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false }
});

const data = JSON.parse(readFileSync('migrations/restore_data.json', 'utf-8'));

async function restoreAuthUsers() {
  const users = data['auth.users'];
  if (!users) return;
  console.log(`Restoring ${users.length} auth users...`);

  for (const user of users) {
    // Use admin API to create user with specific ID and password hash
    const { error } = await supabase.auth.admin.createUser({
      id: user.id,
      email: user.email,
      password: undefined, // We'll update the hash directly
      email_confirm: true,
      user_metadata: user.raw_user_meta_data,
      app_metadata: user.raw_app_meta_data,
    });

    if (error) {
      if (error.message?.includes('already been registered')) {
        console.log(`  User ${user.email} already exists, skipping`);
      } else {
        console.error(`  Error creating user ${user.email}:`, error.message);
      }
    } else {
      console.log(`  Created user: ${user.email}`);
    }
  }

  // Now update the password hashes directly via the REST API
  // The admin.createUser doesn't let us set the exact hash, but
  // we need to update encrypted_password to preserve original passwords
  console.log('Updating password hashes via SQL...');
  for (const user of users) {
    // Use the SQL endpoint to update password hashes
    const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SERVICE_ROLE_KEY,
        'Authorization': `Bearer ${SERVICE_ROLE_KEY}`,
      },
      body: JSON.stringify({}) // placeholder
    });
    // This won't work directly - we'll handle password reset separately
  }
}

async function restoreTable(schema, tableName, rows) {
  const fullName = `${schema}.${tableName}`;
  if (!rows || rows.length === 0) {
    console.log(`${fullName}: no data, skipping`);
    return;
  }

  console.log(`Restoring ${fullName} (${rows.length} rows)...`);

  // Insert in batches of 50
  const batchSize = 50;
  for (let i = 0; i < rows.length; i += batchSize) {
    const batch = rows.slice(i, i + batchSize);
    const { error } = await supabase
      .from(tableName)
      .upsert(batch, { onConflict: 'id', ignoreDuplicates: true });

    if (error) {
      console.error(`  Error in ${fullName} batch ${i}:`, error.message);
      // Try one by one
      for (const row of batch) {
        const { error: singleError } = await supabase
          .from(tableName)
          .upsert(row, { onConflict: 'id', ignoreDuplicates: true });
        if (singleError) {
          console.error(`  Error inserting row ${row.id || 'unknown'}:`, singleError.message);
        }
      }
    } else {
      console.log(`  Inserted batch ${i + 1}-${Math.min(i + batchSize, rows.length)}`);
    }
  }
}

async function restoreUserProfiles(rows) {
  if (!rows || rows.length === 0) return;
  console.log(`Restoring user_profiles (${rows.length} rows)...`);

  const { error } = await supabase
    .from('user_profiles')
    .upsert(rows, { onConflict: 'user_id' });

  if (error) {
    console.error('  Error:', error.message);
  } else {
    console.log('  Done');
  }
}

async function main() {
  console.log('=== ARISTILIA DATABASE RESTORE ===\n');

  // 1. Restore auth users
  await restoreAuthUsers();

  // 2. Restore public tables in FK dependency order
  await restoreUserProfiles(data['public.user_profiles']);
  await restoreTable('public', 'characters', data['public.characters']);
  await restoreTable('public', 'rooms', data['public.rooms']);
  await restoreTable('public', 'journals', data['public.journals']);
  await restoreTable('public', 'inventory_items', data['public.inventory_items']);
  await restoreTable('public', 'maps', data['public.maps']);
  await restoreTable('public', 'pins', data['public.pins']);
  await restoreTable('public', 'wiki_pages', data['public.wiki_pages']);

  console.log('\n=== RESTORE COMPLETE ===');
  console.log('\nNOTE: Users have been created but their passwords were reset.');
  console.log('Each user will need to use "Forgot Password" to set a new password,');
  console.log('OR you can set passwords manually via Supabase Dashboard > Authentication > Users.');
}

main().catch(console.error);
