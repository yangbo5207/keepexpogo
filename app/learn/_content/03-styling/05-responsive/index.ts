import { Article } from '@/types/learn';

const article: Article = {
  id: '05-responsive',
  title: 'Responsive Layout',
  description: 'Mobile-First responsive grid, sidebar visibility, conditional rendering, and dashboard.',
  demos: [
    {
      id: 'styling__responsive__adaptive-grid',
      title: 'Adaptive Grid',
      description: 'Responsive multi-column grid with flex-wrap, sidebar show/hide, and responsive gap.',
      route: '/learn/03-styling/05-responsive/adaptive-grid',
      component: () => import('./AdaptiveGrid'),
    },
    {
      id: 'styling__responsive__conditional-render',
      title: 'Conditional Render',
      description: 'useBreakpoint hook, JS conditional rendering, and landscape detection.',
      route: '/learn/03-styling/05-responsive/conditional-render',
      component: () => import('./ConditionalRender'),
    },
    {
      id: 'styling__responsive__responsive-page',
      title: 'Responsive Page',
      description: 'Full dashboard with nav, stat grid, sidebar, SafeArea, and keyboard avoidance.',
      route: '/learn/03-styling/05-responsive/responsive-page',
      component: () => import('./ResponsivePage'),
    },
  ],
};

export default article;
