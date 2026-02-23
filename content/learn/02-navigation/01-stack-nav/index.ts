import { Article } from '@/types/learn';

const article: Article = {
  id: '01-stack-nav',
  title: 'Stack Navigation',
  description: 'Learn how stack navigation works with push and pop transitions.',
  demos: [
    {
      id: 'navigation__stack-nav__basic-stack',
      title: 'Basic Stack',
      description: 'A simple demonstration of stack-based navigation flow.',
      component: () => import('./BasicStack'),
    },
  ],
};

export default article;
