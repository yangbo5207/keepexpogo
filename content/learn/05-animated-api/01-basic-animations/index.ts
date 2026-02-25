import { Article } from '@/types/learn';

const article: Article = {
  id: '01-basic-animations',
  title: 'Basic Animations',
  description: 'Fade in/out with timing and bouncy spring with adjustable tension/friction.',
  demos: [
    {
      id: 'animated-api__basic__fade',
      title: 'Fade (Timing)',
      description: 'Animated.timing fade in/out with opacity value display and toggle control.',
      route: '/expo-demos/anim-basic/fade',
    },
    {
      id: 'animated-api__basic__fade-toggle',
      title: 'Fade Toggle',
      description: 'Minimal fade in/out toggle using Animated.timing.',
      route: '/expo-demos/anim-basic/fade-toggle',
    },
    {
      id: 'animated-api__basic__scroll-fade',
      title: 'Scroll Fade',
      description: 'Animated.ScrollView driven header fade & scale using Animated.event.',
      route: '/expo-demos/anim-basic/scroll-fade',
    },
    {
      id: 'animated-api__basic__value-xy',
      title: 'ValueXY Move',
      description: 'Animated.ValueXY driven 2D position with spring and getTranslateTransform.',
      route: '/expo-demos/anim-basic/value-xy',
    },
    {
      id: 'animated-api__basic__decay',
      title: 'Decay Momentum',
      description: 'Animated.decay inertial deceleration after drag release with PanResponder.',
      route: '/expo-demos/anim-basic/decay',
    },
    {
      id: 'animated-api__basic__spring',
      title: 'Spring Bounce',
      description: 'Animated.spring bounce effect with adjustable tension and friction sliders.',
      route: '/expo-demos/anim-basic/spring',
    },
  ],
};

export default article;
