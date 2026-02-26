import { Article } from '@/types/learn';

const article: Article = {
  id: '02-props-and-state',
  title: 'Props & State',
  description: 'Understand how data flows through props and how state manages interactivity.',
  demos: [
    {
      id: 'react-basics__props-and-state__props-demo',
      title: 'Props Demo',
      description: 'Passing data between components using props.',
      route: '/learn/01-react-basics/02-props-and-state/props-demo',
      component: () => import('./PropsDemo'),
    },
    {
      id: 'react-basics__props-and-state__state-demo',
      title: 'State Demo',
      description: 'Managing component state with useState to build a todo list.',
      route: '/learn/01-react-basics/02-props-and-state/state-demo',
      component: () => import('./StateDemo'),
    },
  ],
};

export default article;
