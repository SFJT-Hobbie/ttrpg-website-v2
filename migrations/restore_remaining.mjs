import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';

const SUPABASE_URL = 'https://accjefnoivydxvrqskuf.supabase.co';
const SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFjY2plZm5vaXZ5ZHh2cnFza3VmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDIwMjExMSwiZXhwIjoyMDg5Nzc4MTExfQ.YVi6ytcwb8vNcxPl38gYBK9opDyym2EeE2bC-kUYaJM';

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false }
});

const data = JSON.parse(readFileSync('migrations/restore_data.json', 'utf-8'));

async function main() {
  console.log('=== RESTORING REMAINING TABLES ===\n');

  // Restore inventory_items (slot_position is now JSONB)
  const items = data['public.inventory_items'];
  if (items) {
    console.log(`Restoring inventory_items (${items.length} rows)...`);
    const batchSize = 20;
    let successCount = 0;
    let errorCount = 0;

    for (let i = 0; i < items.length; i += batchSize) {
      const batch = items.slice(i, i + batchSize);
      const { error } = await supabase
        .from('inventory_items')
        .upsert(batch, { onConflict: 'id', ignoreDuplicates: true });

      if (error) {
        console.error(`  Batch error:`, error.message);
        // Try one by one
        for (const item of batch) {
          const { error: singleError } = await supabase
            .from('inventory_items')
            .upsert(item, { onConflict: 'id', ignoreDuplicates: true });
          if (singleError) {
            console.error(`  Error ${item.id}: ${singleError.message}`);
            errorCount++;
          } else {
            successCount++;
          }
        }
      } else {
        successCount += batch.length;
      }
    }
    console.log(`  Done: ${successCount} success, ${errorCount} errors`);
  }

  // Restore maps
  const maps = data['public.maps'];
  if (maps) {
    console.log(`\nRestoring maps (${maps.length} rows)...`);
    for (const map of maps) {
      // Ensure numeric fields are properly typed
      if (map.start_lat) map.start_lat = parseFloat(map.start_lat);
      if (map.start_lng) map.start_lng = parseFloat(map.start_lng);
      if (map.start_zoom) map.start_zoom = parseFloat(map.start_zoom);

      const { error } = await supabase
        .from('maps')
        .upsert(map, { onConflict: 'id', ignoreDuplicates: true });

      if (error) {
        console.error(`  Error ${map.id}: ${error.message}`);
      } else {
        console.log(`  Inserted map: ${map.name || map.id}`);
      }
    }
  }

  console.log('\n=== DONE ===');
}

main().catch(console.error);
