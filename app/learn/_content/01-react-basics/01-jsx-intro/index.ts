import { Article } from '@/types/learn';

const article: Article = {
  id: '01-jsx-intro',
  title: 'JSX Introduction',
  description: 'Learn the basics of JSX syntax and how to create your first components.',
  demos: [
    {
      id: 'react-basics__jsx-intro__hello-world',
      title: 'Hello World',
      description: 'A simple Hello World component.',
      route: '/learn/01-react-basics/01-jsx-intro/hello-world',
      component: () => import('./HelloWorld'),
    },
    {
      id: 'react-basics__jsx-intro__counter',
      title: 'Counter',
      description: 'An interactive counter demonstrating JSX expressions and event handling.',
      route: '/learn/01-react-basics/01-jsx-intro/counter',
      component: () => import('./Counter'),
    },
  ],
};

export default article;
