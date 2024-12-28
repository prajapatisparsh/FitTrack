export interface User {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  fitness_goals?: string[];
  created_at: string;
}

export interface WorkoutSession {
  id: string;
  user_id: string;
  type: 'cardio' | 'strength' | 'flexibility';
  duration: number;
  calories_burned: number;
  notes?: string;
  created_at: string;
}

export interface Exercise {
  id: string;
  session_id: string;
  name: string;
  sets?: number;
  reps?: number;
  weight?: number;
  distance?: number;
  duration?: number;
}