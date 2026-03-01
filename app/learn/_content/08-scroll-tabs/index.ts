import { Category } from '@/types/learn';
import scrollTabsArticle from './01-scroll-tabs';

const category: Category = {
  id: '08-scroll-tabs',
  title: '封装滚动 Tabs 组件',
  description: '实现可横向滚动、自动居中和指示器动画的 Tabs 交互组件。',
  icon: 'rectangle.3.offgrid.fill',
  order: 8,
  articles: [scrollTabsArticle],
};

export default category;
