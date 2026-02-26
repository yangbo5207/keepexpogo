import { Article } from '@/types/learn';

const article: Article = {
  id: '05-dynamic-routes',
  title: 'Dynamic Routes',
  description: 'Dynamic segments, catch-all routes, useLocalSearchParams vs useGlobalSearchParams.',
  demos: [
    {
      id: 'expo-router__dynamic__route-params',
      title: 'Route Params',
      description: 'List page navigating to detail with dynamic [id] parameter.',
      route: '/learn/04-expo-router/05-dynamic-routes/dynamic-params',
    },
    {
      id: 'expo-router__dynamic__search-query',
      title: 'Search Query',
      description: 'Search page passing ?q=keyword&category=tech query parameters.',
      route: '/learn/04-expo-router/05-dynamic-routes/dynamic-search',
    },
    {
      id: 'expo-router__dynamic__catch-all-route',
      title: 'Catch All Route',
      description: 'Multi-segment path /docs/api/v2 parsed into breadcrumb navigation.',
      route: '/learn/04-expo-router/05-dynamic-routes/dynamic-catchall',
    },
  ],
};

export default article;
