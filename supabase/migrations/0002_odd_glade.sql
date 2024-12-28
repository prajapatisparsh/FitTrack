/*
  # Add Profile Creation Trigger
  
  1. Changes
    - Add trigger to automatically create a profile when a new user signs up
    - Ensure profile data is properly initialized with user metadata
  
  2. Security
    - Maintains existing RLS policies
    - Only system can execute the trigger function
*/

-- Create the function that will handle profile creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, email)
  VALUES (
    new.id,
    COALESCE(new.raw_user_meta_data->>'full_name', ''),
    new.email
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create the trigger
CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();