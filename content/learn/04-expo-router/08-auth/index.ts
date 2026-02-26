import { Article } from '@/types/learn';

const article: Article = {
  id: '08-auth',
  title: 'Auth Guard',
  description: 'Route protection with authentication context, Redirect, and (auth)/(app) group pattern.',
  demos: [
    {
      id: 'expo-router__auth__auth-flow',
      title: 'Auth Flow',
      description: 'Complete login/logout flow with automatic redirect between auth and app screens.',
      route: '/learn/04-expo-router/08-auth/auth-flow',
    },
    {
      id: 'expo-router__auth__protected-screens',
      title: 'Protected Screens',
      description: 'Simulated (auth)/(app) group switching with splash loading and role-based access.',
      route: '/learn/04-expo-router/08-auth/auth-protected',
    },
  ],
};

export default article;
