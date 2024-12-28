import React, { useState } from 'react';
import { FormInput } from '../components/forms/FormInput';
import { FormError } from '../components/forms/FormError';
import { useAuth } from '../hooks/useAuth';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const { error, handleRegister } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleRegister(email, password, fullName);
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Create Account</h1>
      <FormError message={error} />
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInput
          id="fullName"
          label="Full Name"
          type="text"
          value={fullName}
          onChange={setFullName}
          required
          minLength={2}
        />
        <FormInput
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={setEmail}
          required
        />
        <FormInput
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={setPassword}
          required
          minLength={6}
          hint="Must be at least 6 characters long"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}