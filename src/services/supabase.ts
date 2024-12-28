import { User } from '../types';
import { supabase } from '../lib/supabase';

export async function fetchProfile(userId: string): Promise<User | null> {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .maybeSingle();
    
  if (error) {
    console.error('Error fetching profile:', error);
    return null;
  }
  
  return data;
}