import { Article } from '@/types/learn';

const article: Article = {
  id: '01-reanimated-basic',
  title: 'Reanimated Basic',
  description: 'Shared values, animated styles, and spring animations.',
  demos: [
    {
      id: 'reanimated__basic__basic-animated-style',
      title: 'Basic Animated Style',
      description: 'useSharedValue + useAnimatedStyle with direct assignment (no animation).',
      route: '/learn/06-reanimated/01-reanimated-basic/basic-animated-style',
    },
    {
      id: 'reanimated__basic__basic-animated-style-timing',
      title: 'Basic Animated Style (Timing)',
      description: 'useSharedValue + useAnimatedStyle + withTiming for smooth movement.',
      route: '/learn/06-reanimated/01-reanimated-basic/basic-animated-style-timing',
    },
    {
      id: 'reanimated__basic__basic-animated-style-spring',
      title: 'Basic Animated Style (Spring)',
      description: 'useSharedValue + useAnimatedStyle + withSpring for springy motion.',
      route: '/learn/06-reanimated/01-reanimated-basic/basic-animated-style-spring',
    },
    {
      id: 'reanimated__basic__decay-drag',
      title: 'Decay Drag',
      description: 'withDecay inertial momentum after drag with clamp range limit.',
      route: '/learn/06-reanimated/01-reanimated-basic/decay-drag',
    },
  ],
};

export default article;
