import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { validateEmail, validatePassword } from '../utils/validation';

export function useAuth() {
  const navigate = useNavigate();
  const { signIn, signUp } = useAuthStore();
  const [error, setError] = useState('');

  const handleLogin = async (email: string, password: string) => {
    setError('');

    const emailError = validateEmail(email);
    if (emailError) {
      setError(emailError);
      return false;
    }

    try {
      await signIn(email, password);
      navigate('/');
      return true;
    } catch (err: any) {
      setError(err?.message?.includes('invalid_credentials')
        ? 'Invalid email or password. Please try again.'
        : 'Login failed. Please try again.');
      return false;
    }
  };

  const handleRegister = async (email: string, password: string, fullName: string) => {
    setError('');

    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      return false;
    }

    const emailError = validateEmail(email);
    if (emailError) {
      setError(emailError);
      return false;
    }

    try {
      await signUp(email, password, fullName);
      navigate('/');
      return true;
    } catch (err: any) {
      setError(err?.message?.includes('weak_password')
        ? 'Password is too weak. It should be at least 6 characters long.'
        : 'Registration failed. Please try again.');
      return false;
    }
  };

  return { error, handleLogin, handleRegister };
}