import { Article } from '@/types/learn';

const article: Article = {
  id: '01-tap',
  title: 'Tap 点击手势',
  description: '最基础的点击手势与回调触发。',
  demos: [
    {
      id: 'gesture__tap__basic',
      title: '最简单的点击',
      description: 'Gesture.Tap 的 onStart / onEnd。',
      route: '/learn/07-gesture-handler/01-tap/basic',
    },
    {
      id: 'gesture__tap__ripple',
      title: '点击涟漪动画',
      description: '在点击位置生成扩散并渐隐的 Ripple 效果。',
      route: '/learn/07-gesture-handler/01-tap/ripple',
    },
    {
      id: 'gesture__tap__press-feedback',
      title: '按下缩小与成功点击',
      description: '按下时缩小，松开恢复，点击成功后再执行动作。',
      route: '/learn/07-gesture-handler/01-tap/press-feedback',
    },
    {
      id: 'gesture__tap__tap-longpress-menu',
      title: '点击详情与长按菜单',
      description: '点击打开详情，长按弹出操作菜单（Exclusive 互斥）。',
      route: '/learn/07-gesture-handler/01-tap/tap-longpress-menu',
    },
  ],
};

export default article;
