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
    {
      id: 'reanimated__composite__list-stagger',
      title: '列表交错入场',
      description: '用 withDelay 按索引延迟出现，提升层次感。',
      route: '/learn/06-reanimated/02-composite-animations/list-stagger',
    },
    {
      id: 'reanimated__composite__pulse',
      title: '呼吸灯按钮 (Pulse)',
      description: 'withRepeat + withTiming 实现持续呼吸的缩放效果。',
      route: '/learn/06-reanimated/02-composite-animations/pulse',
    },
    {
      id: 'reanimated__composite__add-to-cart',
      title: '加入购物车',
      description: '点击后：缩小反馈、弹起放大、回到原状。',
      route: '/learn/06-reanimated/02-composite-animations/add-to-cart',
    },
  ],
};

export default article;
