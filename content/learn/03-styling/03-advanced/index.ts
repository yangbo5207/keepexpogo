import { Article } from '@/types/learn';

const article: Article = {
  id: '03-advanced',
  title: 'Advanced Techniques',
  description: 'Transitions, animations, group/peer variants, and component patterns.',
  demos: [
    {
      id: 'styling__advanced__transition-animation',
      title: 'Transitions & Animations',
      description: 'CSS transitions and keyframe animations with NativeWind.',
      component: () => import('./TransitionAnimation'),
    },
    {
      id: 'styling__advanced__group-peer',
      title: 'Group & Peer Variants',
      description: 'Parent-driven and sibling-driven style changes.',
      component: () => import('./GroupPeerVariants'),
    },
    {
      id: 'styling__advanced__component-patterns',
      title: 'Component Patterns',
      description: 'Dynamic classNames and multi-variant component composition.',
      component: () => import('./ComponentPatterns'),
    },
  ],
};

export default article;
