import { Category } from '@/types/learn';
import basicAnimations from './01-basic-animations';
import compositeAnimations from './02-composite-animations';
import interpolation from './03-interpolation';
import animatedScrollview from './04-animated-scrollview';

const category: Category = {
  id: '05-animated-api',
  title: 'Animated API',
  description: 'Core Animated API: timing, spring, decay, composition, and interpolation.',
  icon: 'wand.and.stars',
  order: 5,
  articles: [basicAnimations, compositeAnimations, interpolation, animatedScrollview],
};

export default category;
