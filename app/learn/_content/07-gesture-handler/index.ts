import { Category } from '@/types/learn';
import tapGesture from './01-tap';
import longPressGesture from './02-longpress';
import panGesture from './03-pan';

const category: Category = {
  id: '07-gesture-handler',
  title: 'React Native Gesture Handler',
  description: 'Tap, pan, long press and gesture composition basics.',
  icon: 'hand.tap.fill',
  order: 7,
  articles: [tapGesture, longPressGesture, panGesture],
};

export default category;
