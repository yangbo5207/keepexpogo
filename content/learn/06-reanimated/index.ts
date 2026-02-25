import { Category } from '@/types/learn';
import reanimatedBasic from './01-reanimated-basic';

const category: Category = {
  id: '06-reanimated',
  title: 'React Native Reanimated',
  description: 'High-performance animations with worklets, shared values, and gesture-driven interactions.',
  icon: 'bolt.fill',
  order: 6,
  articles: [reanimatedBasic],
};

export default category;
