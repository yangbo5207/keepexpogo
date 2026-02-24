import { Category } from '@/types/learn';
import animatedApi from './01-animated-api';

const category: Category = {
  id: '05-animations',
  title: 'Animations',
  description: 'Master React Native animations: Animated API, interpolation, and composition.',
  icon: 'sparkles',
  order: 5,
  articles: [animatedApi],
};

export default category;
