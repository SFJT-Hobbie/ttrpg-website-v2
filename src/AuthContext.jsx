/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "./supabaseClient";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isRecovery, setIsRecovery] = useState(false);

  useEffect(() => {
    let mounted = true;

    // Check if the URL has a recovery code that needs to be exchanged
    const params = new URLSearchParams(window.location.search);
    const hasRecoveryCode = params.has('code') && window.location.pathname === '/reset-password';

    // 1. Subscribe to auth changes first so we catch the recovery event
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (!mounted) return;
        const currentUser = session?.user ?? null;
        setUser(currentUser);
        setIsAdmin(currentUser?.app_metadata?.is_admin || false);
        if (session) supabase.realtime.setAuth(session.access_token);
        else supabase.realtime.setAuth(null);
        if (event === 'PASSWORD_RECOVERY') {
          setIsRecovery(true);
        }
        setLoading(false);
      }
    );

    // 2. Check initial session — but if there's a recovery code pending,
    //    let onAuthStateChange handle it instead to avoid a race condition
    if (!hasRecoveryCode) {
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (!mounted) return;
        const currentUser = session?.user ?? null;
        setUser(currentUser);
        setIsAdmin(currentUser?.app_metadata?.is_admin || false);
        if (session) supabase.realtime.setAuth(session.access_token);
        setLoading(false);
      });
    }

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const value = {
    user,
    isAdmin,
    loading,
    isRecovery,
    signIn: async ({ email, password }) =>
      supabase.auth.signInWithPassword({ email, password }),
    signUp: async ({ username, email, password }) =>
      supabase.auth.signUp({
        email,
        password,
        options: { data: { username } },
      }),
    signOut: async () => supabase.auth.signOut(),
    resetPassword: async (email) =>
      supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      }),
    updatePassword: async (newPassword) =>
      supabase.auth.updateUser({ password: newPassword }),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}