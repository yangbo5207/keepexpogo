import { Article } from '@/types/learn';

const article: Article = {
  id: '06-navigation-api',
  title: 'Navigation API',
  description: 'Programmatic navigation with router.navigate, push, replace, back, and the Link component.',
  demos: [
    {
      id: 'expo-router__navigation__navigate-vs-push',
      title: 'Navigate vs Push',
      description: 'Compare navigate (reuse existing) vs push (always new) with stack depth visualization.',
      route: '/learn/04-expo-router/06-navigation-api/nav-vs-push',
    },
    {
      id: 'expo-router__navigation__replace-reset',
      title: 'Replace & Reset',
      description: 'Replace current screen (login → home) and reset entire navigation stack.',
      route: '/learn/04-expo-router/06-navigation-api/nav-replace',
    },
    {
      id: 'expo-router__navigation__link-component',
      title: 'Link Component',
      description: 'Declarative navigation with Link href, push, replace, and conditional Redirect.',
      route: '/learn/04-expo-router/06-navigation-api/nav-link',
    },
  ],
};

export default article;
