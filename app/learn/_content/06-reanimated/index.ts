import { Category } from '@/types/learn';
import reanimatedBasic from './01-reanimated-basic';
import compositeAnimations from './02-composite-animations';
import derived from './03-derived';
import runOn from './04-runon';
import interpolateArticle from './05-interpolate';

const category: Category = {
  id: '06-reanimated',
  title: 'React Native Reanimated',
  description: 'High-performance animations with worklets, shared values, and gesture-driven interactions.',
  icon: 'bolt.fill',
  order: 6,
  articles: [reanimatedBasic, compositeAnimations, derived, runOn, interpolateArticle],
};

export default category;
