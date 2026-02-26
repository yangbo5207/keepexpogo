import { Article } from '@/types/learn';

const article: Article = {
  id: '02-tabs',
  title: 'Tab Navigation',
  description: 'Bottom tabs in Expo Router: icons, badges, hidden routes, and custom tab bar.',
  demos: [
    {
      id: 'expo-router__tabs__basic-tabs',
      title: 'Basic Tabs',
      description: 'Three-tab layout with icons, labels, and badge configuration.',
      route: '/learn/04-expo-router/02-tabs/tabs-basic',
    },
    {
      id: 'expo-router__tabs__custom-tab-bar',
      title: 'Custom Tab Bar',
      description: 'Fully custom tab bar UI with animated indicator and styled layout.',
      route: '/learn/04-expo-router/02-tabs/tabs-custom',
    },
    {
      id: 'expo-router__tabs__hidden-routes',
      title: 'Hidden Routes',
      description: 'Hide specific tabs from the tab bar while keeping them navigable.',
      route: '/learn/04-expo-router/02-tabs/tabs-hidden',
    },
  ],
};

export default article;
