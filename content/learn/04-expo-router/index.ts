import { Category } from '@/types/learn';
import stack from './01-stack';
import tabs from './02-tabs';
import drawer from './03-drawer';
import nesting from './04-nesting';
import dynamicRoutes from './05-dynamic-routes';
import navigationApi from './06-navigation-api';
import modals from './07-modals';
import auth from './08-auth';

const category: Category = {
  id: '04-expo-router',
  title: 'Expo Router',
  description: 'File-based routing for React Native with Expo Router.',
  icon: 'arrow.triangle.branch',
  order: 4,
  articles: [stack, tabs, drawer, nesting, dynamicRoutes, navigationApi, modals, auth],
};

export default category;
