import { Article } from '@/types/learn';

const article: Article = {
  id: '06-interpolate-advanced',
  title: 'Interpolate 高级应用',
  description: '多层插值与 3D 变换的进阶组合案例。',
  demos: [
    {
      id: 'reanimated__interpolate_advanced__flip-card',
      title: '3D 卡片翻转效果',
      description: '使用共享值驱动正反面翻转与显隐。',
      route: '/learn/06-reanimated/06-interpolate-advanced/flip-card',
    },
    {
      id: 'reanimated__interpolate_advanced__parallax',
      title: '视差滚动效果',
      description: '滚动偏移驱动背景视差与标题淡出。',
      route: '/learn/06-reanimated/06-interpolate-advanced/parallax',
    },
  ],
};

export default article;
