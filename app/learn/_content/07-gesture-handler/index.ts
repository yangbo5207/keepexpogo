import { Category } from '@/types/learn';
import tapGesture from './01-tap';
import longPressGesture from './02-longpress';
import panGesture from './03-pan';
import flingGesture from './04-fling';
import pinchGesture from './05-pinch';
import rotationGesture from './06-rotation';
import gestureConflicts from './07-gesture-conflicts';
import swipeDeletePractical from './08-swipe-delete';

const category: Category = {
  id: '07-gesture-handler',
  title: 'React Native Gesture Handler',
  description: 'Tap, pan, long press and gesture composition basics.',
  icon: 'hand.tap.fill',
  order: 7,
  articles: [tapGesture, longPressGesture, panGesture, flingGesture, pinchGesture, rotationGesture, gestureConflicts, swipeDeletePractical],
};

export default category;
