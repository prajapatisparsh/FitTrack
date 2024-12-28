import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, User, BarChart2, Users } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export default function Navbar() {
  const { user, signOut } = useAuthStore();

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Dumbbell className="h-8 w-8 text-indigo-600" />
            <span className="font-bold text-xl">FitTrack</span>
          </Link>

          {user ? (
            <div className="flex items-center space-x-8">
              <Link to="/workouts" className="nav-link">
                <BarChart2 className="h-5 w-5" />
                <span>Workouts</span>
              </Link>
              <Link to="/community" className="nav-link">
                <Users className="h-5 w-5" />
                <span>Community</span>
              </Link>
              <Link to="/profile" className="nav-link">
                <User className="h-5 w-5" />
                <span>Profile</span>
              </Link>
              <button
                onClick={() => signOut()}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-gray-600 hover:text-indigo-600"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}