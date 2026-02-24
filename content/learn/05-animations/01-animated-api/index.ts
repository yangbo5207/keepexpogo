import { Article } from '@/types/learn';

const article: Article = {
  id: '01-animated-api',
  title: 'Animated API',
  description: 'Core Animated API: timing, spring, decay, composition, and interpolation.',
  demos: [
    {
      id: 'animations__animated-api__basic',
      title: 'Basic Animations',
      description: 'Fade in/out with timing and bouncy spring with adjustable tension/friction.',
      route: '/expo-demos/anim-basic',
    },
    {
      id: 'animations__animated-api__composite',
      title: 'Composite Animations',
      description: 'Sequence and stagger composition patterns for multi-element choreography.',
      route: '/expo-demos/anim-composite',
    },
    {
      id: 'animations__animated-api__interpolate',
      title: 'Interpolation',
      description: 'Map Animated.Value to colors, rotation angles, and clamped ranges.',
      route: '/expo-demos/anim-interpolate',
    },
  ],
};

export default article;
