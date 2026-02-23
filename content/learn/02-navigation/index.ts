import { Category } from '@/types/learn';
import stackNav from './01-stack-nav';

const category: Category = {
  id: '02-navigation',
  title: 'Navigation',
  description: 'Navigate between screens with stack, tabs, and more.',
  icon: 'paperplane.fill',
  order: 2,
  articles: [stackNav],
};

export default category;
