import { Article } from '@/types/learn';

const article: Article = {
  id: '03-drawer',
  title: 'Drawer Navigation',
  description: 'Drawer navigator in Expo Router: layout config, toggle control, and custom drawer content.',
  demos: [
    {
      id: 'expo-router__drawer__basic-drawer',
      title: 'Basic Drawer',
      description: 'Side drawer with 3-4 pages and toggle button control.',
      route: '/learn/04-expo-router/03-drawer/drawer-basic',
    },
    {
      id: 'expo-router__drawer__custom-drawer-content',
      title: 'Custom Drawer Content',
      description: 'Custom drawer with avatar, dividers, and logout section.',
      route: '/learn/04-expo-router/03-drawer/drawer-custom',
    },
  ],
};

export default article;
