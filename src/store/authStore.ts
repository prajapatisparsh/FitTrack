import { create } from 'zustand';
import { User } from '../types';
import { supabase } from '../lib/supabase';
import { fetchProfile } from '../services/supabase';

interface AuthState {
  user: User | null;
  loading: boolean;
  setUser: (user: User | null) => void;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, fullName: string) => Promise<void>;
  signOut: () => Promise<void>;
  initializeSession: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,
  setUser: (user) => set({ user }),
  
  initializeSession: async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user) {
        set({ user: null, loading: false });
        return;
      }

      const profile = await fetchProfile(session.user.id);
      set({ user: profile, loading: false });
    } catch (error) {
      console.error('Error loading session:', error);
      set({ user: null, loading: false });
    }
  },

  signIn: async (email, password) => {
    const { data: { session }, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    
    if (session?.user) {
      const profile = await fetchProfile(session.user.id);
      if (profile) {
        set({ user: profile });
      }
    }
  },

  signUp: async (email, password, fullName) => {
    const { data: { session }, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });
    if (error) throw error;

    if (session?.user) {
      // Wait for the trigger to create the profile
      await new Promise(resolve => setTimeout(resolve, 1500));
      const profile = await fetchProfile(session.user.id);
      if (profile) {
        set({ user: profile });
      }
    }
  },

  signOut: async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    set({ user: null });
  },
}));