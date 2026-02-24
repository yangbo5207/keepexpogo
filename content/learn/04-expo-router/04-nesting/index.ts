import { Article } from '@/types/learn';

const article: Article = {
  id: '04-nesting',
  title: 'Nesting Navigators',
  description: 'Nested navigators in Expo Router: Tabs inside Stack, hiding tab bar, and cross-navigator jumps.',
  demos: [
    {
      id: 'expo-router__nesting__tabs-in-stack',
      title: 'Tabs In Stack',
      description: 'Root Stack containing Tabs, with a sub-Stack inside one Tab — three-level nesting.',
      route: '/expo-demos/nest-tabs-stack',
    },
    {
      id: 'expo-router__nesting__hide-tab-bar',
      title: 'Hide Tab Bar',
      description: 'Hide the bottom tab bar when navigating to a child screen.',
      route: '/expo-demos/nest-hide-tabbar',
    },
    {
      id: 'expo-router__nesting__cross-navigator',
      title: 'Cross Navigator',
      description: 'Navigate from inside a Tab to a modal or another Stack outside the Tabs.',
      route: '/expo-demos/nest-cross',
    },
  ],
};

export default article;
