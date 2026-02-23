import { Category } from '@/types/learn';
import jsxIntro from './01-jsx-intro';
import propsAndState from './02-props-and-state';

const category: Category = {
  id: '01-react-basics',
  title: 'React Basics',
  description: 'Core React concepts: JSX, components, props, and state.',
  icon: 'book.fill',
  order: 1,
  articles: [jsxIntro, propsAndState],
};

export default category;
