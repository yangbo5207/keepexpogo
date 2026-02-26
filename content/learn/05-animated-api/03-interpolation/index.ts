import { Article } from '@/types/learn';

const article: Article = {
  id: '03-interpolation',
  title: 'Interpolation',
  description: 'Map Animated.Value to colors, rotation angles, and clamped ranges.',
  demos: [
    {
      id: 'animated-api__interpolation__color',
      title: 'Color Interpolation',
      description: 'Drag a slider to interpolate Animated.Value into a smooth background color gradient.',
      route: '/learn/05-animated-api/03-interpolation/color',
    },
    {
      id: 'animated-api__interpolation__rotation',
      title: 'Rotation',
      description: 'Infinite spinning loader and a manual angle control via interpolation.',
      route: '/learn/05-animated-api/03-interpolation/rotation',
    },
    {
      id: 'animated-api__interpolation__slide-up',
      title: 'Slide Up',
      description: 'Single Animated.Value drives both opacity and translateY via interpolate.',
      route: '/learn/05-animated-api/03-interpolation/slide-up',
    },
    {
      id: 'animated-api__interpolation__pop-in',
      title: 'Pop In',
      description: 'Multi-segment interpolate: 0→1.2 overshoot then settle to 1 for pop-in effect.',
      route: '/learn/05-animated-api/03-interpolation/pop-in',
    },
  ],
};

export default article;
