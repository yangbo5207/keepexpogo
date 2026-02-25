import { Article } from '@/types/learn';

const article: Article = {
  id: '04-animated-scrollview',
  title: 'Animated.ScrollView',
  description: 'Scroll-driven collapsing header with height and opacity interpolation.',
  demos: [
    {
      id: 'animated-api__scrollview__collapsing-header',
      title: 'Collapsing Header',
      description: 'Scroll-driven header that collapses and fades using Animated.event and interpolate.',
      route: '/expo-demos/anim-scrollview/collapsing-header',
    },
    {
      id: 'animated-api__scrollview__parallax-list',
      title: 'Parallax List',
      description: 'Each list item scales and fades based on its scroll position via per-item interpolate.',
      route: '/expo-demos/anim-scrollview/parallax-list',
    },
    {
      id: 'animated-api__scrollview__page-indicator',
      title: 'Page Indicator',
      description: 'Horizontal paging with scroll-driven dot indicator using interpolate on scrollX.',
      route: '/expo-demos/anim-scrollview/page-indicator',
    },
  ],
};

export default article;
