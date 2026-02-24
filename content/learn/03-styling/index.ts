import { Category } from '@/types/learn';
import nativewind from './01-nativewind';
import theme from './02-theme';
import advanced from './03-advanced';
import components from './04-components';
import responsive from './05-responsive';

const category: Category = {
  id: '03-styling',
  title: 'Styling',
  description: 'Style your app with NativeWind, Tailwind CSS, and more.',
  icon: 'chevron.left.forwardslash.chevron.right',
  order: 3,
  articles: [nativewind, theme, advanced, components, responsive],
};

export default category;
