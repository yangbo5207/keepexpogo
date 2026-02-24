import { Article } from '@/types/learn';

const article: Article = {
  id: '01-stack',
  title: 'Stack Navigation',
  description: 'Stack navigator in Expo Router: layout, header customization, and screen options.',
  demos: [
    {
      id: 'expo-router__stack__basic-stack',
      title: 'Basic Stack',
      description: 'Home → Detail → SubDetail three-screen push and pop flow.',
      route: '/expo-demos/stack-basic',
    },
    {
      id: 'expo-router__stack__header-custom',
      title: 'Header Custom',
      description: 'Custom header with right button, custom title component, and large title mode.',
      route: '/expo-demos/stack-header',
    },
    {
      id: 'expo-router__stack__screen-options',
      title: 'Screen Options',
      description: 'Batch screenOptions, per-screen options override, and headerShown toggle.',
      route: '/expo-demos/stack-options',
    },
  ],
};

export default article;
