'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

type AuthType = 'login' | 'signup';

interface Props {
  type: AuthType;
}

export default function AuthForm({ type }: Props) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
  
    try {
      let result;
  
      if (type === 'login') {
        result = await supabase.auth.signInWithPassword({
          email,
          password,
        });
      } else {
        result = await supabase.auth.signUp({
          email,
          password,
        });
      }
  
      const { error } = result;
  
      if (error) {
        setError(error.message);
      } else {
        router.push('/');
      }
    } catch (err: any) {
      setError('Unexpected error occurred. Please try again.');
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-gray-900 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4 text-center">{type === 'login' ? 'Log In' : 'Sign Up'}</h2>

      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 mb-4 rounded bg-gray-800 text-white"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 mb-4 rounded bg-gray-800 text-white"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      {error && <p className="text-red-500 mb-2 text-sm">{error}</p>}

      <button type="submit" className="w-full bg-green-600 hover:bg-green-700 py-2 rounded text-white font-semibold">
        {type === 'login' ? 'Log In' : 'Sign Up'}
      </button>
    </form>
  );
}
