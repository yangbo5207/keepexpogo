import { Article } from '@/types/learn';

const article: Article = {
  id: '01-scroll-tabs',
  title: '滚动 tabs',
  description: '封装可横向滚动的 Tabs：选中项自动居中，Active 指示器平滑移动。',
  demos: [
    {
      id: 'scroll_tabs__basic__scroll-tabs',
      title: '滚动 Tabs 组件',
      description: 'Tab 较多时可左右滑动，点击切换并自动将选中项滚动到中间。',
      route: '/learn/08-scroll-tabs/01-scroll-tabs/scroll-tabs',
    },
  ],
};

export default article;
