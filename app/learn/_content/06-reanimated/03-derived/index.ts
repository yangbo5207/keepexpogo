import { Article } from '@/types/learn';

const article: Article = {
  id: '03-derived',
  title: '派生',
  description: '通过 useDerivedValue 计算出可复用的动画状态。',
  demos: [
    {
      id: 'reanimated__derived__format-percent',
      title: '格式化显示值',
      description: '把 SharedValue 派生为百分比文本。',
      route: '/learn/06-reanimated/03-derived/format-percent',
    },
    {
      id: 'reanimated__derived__linked-rotation',
      title: '联动旋转',
      description: '第二个方块旋转角度始终为第一个的 -2 倍。',
      route: '/learn/06-reanimated/03-derived/linked-rotation',
    },
    {
      id: 'reanimated__derived__svg-pulse',
      title: 'SVG 呼吸圆环',
      description: '驱动 SVG 的 r 与 strokeWidth 实现呼吸效果。',
      route: '/learn/06-reanimated/03-derived/svg-pulse',
    },
    {
      id: 'reanimated__derived__start-stop',
      title: '开始与暂停',
      description: '使用 cancelAnimation 控制动画开始/停止。',
      route: '/learn/06-reanimated/03-derived/start-stop',
    },
  ],
};

export default article;
