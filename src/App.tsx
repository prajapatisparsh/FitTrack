import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Workouts from './pages/Workouts';
import Community from './pages/Community';
import Dashboard from './pages/Dashboard';
import { useAuthStore } from './store/authStore';

function App() {
  const { user, loading, initializeSession } = useAuthStore();

  useEffect(() => {
    initializeSession();
  }, [initializeSession]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600" />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={user ? <Dashboard /> : <Home />} />
          <Route
            path="login"
            element={user ? <Navigate to="/" replace /> : <Login />}
          />
          <Route
            path="register"
            element={user ? <Navigate to="/" replace /> : <Register />}
          />
          <Route
            path="profile"
            element={user ? <Profile /> : <Navigate to="/login" replace />}
          />
          <Route
            path="workouts"
            element={user ? <Workouts /> : <Navigate to="/login" replace />}
          />
          <Route
            path="community"
            element={user ? <Community /> : <Navigate to="/login" replace />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;