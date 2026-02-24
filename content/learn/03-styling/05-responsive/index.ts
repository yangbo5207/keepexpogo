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
      component: () => import('./AdaptiveGrid'),
    },
    {
      id: 'styling__responsive__conditional-render',
      title: 'Conditional Render',
      description: 'useBreakpoint hook, JS conditional rendering, and landscape detection.',
      component: () => import('./ConditionalRender'),
    },
    {
      id: 'styling__responsive__responsive-page',
      title: 'Responsive Page',
      description: 'Full dashboard with nav, stat grid, sidebar, SafeArea, and keyboard avoidance.',
      component: () => import('./ResponsivePage'),
    },
  ],
};

export default article;
