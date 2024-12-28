import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Users, Trophy } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export default function Dashboard() {
  const { user } = useAuthStore();

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">
          Welcome back, {user?.full_name}!
        </h2>
        <p className="text-gray-600">
          Track your fitness journey and achieve your goals.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Link
          to="/workouts"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <Activity className="h-8 w-8 text-indigo-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Workouts</h3>
          <p className="text-gray-600">Log and track your daily workouts</p>
        </Link>

        <Link
          to="/community"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <Users className="h-8 w-8 text-indigo-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Community</h3>
          <p className="text-gray-600">Connect with other fitness enthusiasts</p>
        </Link>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <Trophy className="h-8 w-8 text-indigo-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Achievements</h3>
          <p className="text-gray-600">Coming soon...</p>
        </div>
      </div>
    </div>
  );
}