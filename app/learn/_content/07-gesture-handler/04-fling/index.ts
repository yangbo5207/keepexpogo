import { Article } from '@/types/learn';

const article: Article = {
  id: '04-fling',
  title: 'Fling 快滑手势',
  description: '识别高速滑动动作并触发轻量反馈。',
  demos: [
    {
      id: 'gesture__fling__basic',
      title: '基础用法',
      description: '左右快滑识别，并根据方向展示反馈。',
      route: '/learn/07-gesture-handler/04-fling/basic',
    },
    {
      id: 'gesture__fling__pager',
      title: '左右甩动切换内容',
      description: '通过 Fling 手势在多页内容间快速切换。',
      route: '/learn/07-gesture-handler/04-fling/pager',
    },
    {
      id: 'gesture__fling__coexist',
      title: '手势共存：缩放 + 快甩',
      description: '双指缩放的同时支持单指向下快甩关闭。',
      route: '/learn/07-gesture-handler/04-fling/coexist',
    },
  ],
};

export default article;
