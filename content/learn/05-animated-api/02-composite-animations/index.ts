import { Article } from '@/types/learn';

const article: Article = {
  id: '02-composite-animations',
  title: 'Composite Animations',
  description: 'Sequence and stagger composition patterns for multi-element choreography.',
  demos: [
    {
      id: 'animated-api__composite__sequence',
      title: 'Sequence',
      description: 'Three boxes animate one after another: move, change color, and scale in sequence.',
      route: '/learn/05-animated-api/02-composite-animations/sequence',
    },
    {
      id: 'animated-api__composite__parallel',
      title: 'Parallel',
      description: 'Opacity, scale and rotation animate simultaneously using Animated.parallel.',
      route: '/learn/05-animated-api/02-composite-animations/parallel',
    },
    {
      id: 'animated-api__composite__stagger',
      title: 'Stagger',
      description: 'Eight list items fade in and slide from the left with staggered delays.',
      route: '/learn/05-animated-api/02-composite-animations/stagger',
    },
    {
      id: 'animated-api__composite__loop',
      title: 'Loop',
      description: 'Animated.loop for continuous spinning and pulsing effects.',
      route: '/learn/05-animated-api/02-composite-animations/loop',
    },
    {
      id: 'animated-api__composite__button-feedback',
      title: 'Button Feedback',
      description: 'Practical button press effects combining spring, sequence, loop and parallel.',
      route: '/learn/05-animated-api/02-composite-animations/button-feedback',
    },
  ],
};

export default article;
