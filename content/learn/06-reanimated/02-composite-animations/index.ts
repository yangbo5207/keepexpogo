import { Article } from '@/types/learn';

const article: Article = {
  id: '02-composite-animations',
  title: '组合动画',
  description: '使用 withSequence 等 API 组合多个动画片段。',
  demos: [
    {
      id: 'reanimated__composite__sequence',
      title: 'withSequence 语法示例',
      description: '依次执行多个 withTiming 动画片段。',
      route: '/learn/06-reanimated/02-composite-animations/sequence',
    },
    {
      id: 'reanimated__composite__shake',
      title: '错误提示摇晃 (Shake)',
      description: 'withSequence + withRepeat 组合左右晃动。',
      route: '/learn/06-reanimated/02-composite-animations/shake',
    },
  ],
};

export default article;
