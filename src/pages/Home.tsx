import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Target, Users, Trophy } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="text-center space-y-8">
        <h1 className="text-5xl font-bold text-gray-900">
          Transform Your Fitness Journey
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Track workouts, set goals, and connect with a community of fitness
          enthusiasts. Your personal fitness coach, right in your pocket.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/register"
            className="bg-indigo-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-indigo-700"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="bg-white text-indigo-600 px-8 py-3 rounded-md text-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50"
          >
            Sign In
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureCard
          icon={<Activity className="h-8 w-8 text-indigo-600" />}
          title="Track Workouts"
          description="Log your exercises, track progress, and analyze your performance over time."
        />
        <FeatureCard
          icon={<Target className="h-8 w-8 text-indigo-600" />}
          title="Set Goals"
          description="Set personalized fitness goals and get AI-powered recommendations."
        />
        <FeatureCard
          icon={<Users className="h-8 w-8 text-indigo-600" />}
          title="Join Community"
          description="Connect with like-minded fitness enthusiasts and share your journey."
        />
        <FeatureCard
          icon={<Trophy className="h-8 w-8 text-indigo-600" />}
          title="Complete Challenges"
          description="Participate in community challenges and earn achievements."
        />
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}