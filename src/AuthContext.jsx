/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "./supabaseClient";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    // 1. Check initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!mounted) return;
      const currentUser = session?.user ?? null;
      setUser(currentUser);
      setIsAdmin(currentUser?.app_metadata?.is_admin || false);
      if (session) supabase.realtime.setAuth(session.access_token);
      setLoading(false);
    });

    // 2. Subscribe to auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        const currentUser = session?.user ?? null;
        setUser(currentUser);
        setIsAdmin(currentUser?.app_metadata?.is_admin || false);
        if (session) supabase.realtime.setAuth(session.access_token);
        else supabase.realtime.setAuth(null);
        setLoading(false);
      }
    );

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const value = {
    user,
    isAdmin,
    loading,
    signIn: async ({ email, password }) =>
      supabase.auth.signInWithPassword({ email, password }),
    signUp: async ({ username, email, password }) =>
      supabase.auth.signUp({
        email,
        password,
        options: { data: { username } },
      }),
    signOut: async () => supabase.auth.signOut(),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}