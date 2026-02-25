import { Article } from '@/types/learn';

const article: Article = {
  id: '01-reanimated-basic',
  title: 'Reanimated Basic',
  description: 'Shared values, animated styles, and spring animations.',
  demos: [
    {
      id: 'reanimated__basic__spring-move',
      title: 'Spring Move',
      description: 'useSharedValue + useAnimatedStyle + withSpring to move a box.',
      route: '/expo-demos/reanimated-basic/spring-move',
    },
    {
      id: 'reanimated__basic__timing-move',
      title: 'Timing Move',
      description: 'withTiming default vs custom duration and Easing.bezier curve.',
      route: '/expo-demos/reanimated-basic/timing-move',
    },
    {
      id: 'reanimated__basic__spring-config',
      title: 'Spring Config',
      description: 'withSpring with different damping, stiffness, and mass configs.',
      route: '/expo-demos/reanimated-basic/spring-config',
    },
    {
      id: 'reanimated__basic__decay-drag',
      title: 'Decay Drag',
      description: 'withDecay inertial momentum after drag with clamp range limit.',
      route: '/expo-demos/reanimated-basic/decay-drag',
    },
  ],
};

export default article;
