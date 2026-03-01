import { Article } from '@/types/learn';

const article: Article = {
  id: '05-pinch',
  title: 'Pinch 缩放手势',
  description: '通过双指捏合实现缩放交互。',
  demos: [
    {
      id: 'gesture__pinch__basic',
      title: '基础用法',
      description: '双指捏合缩放一个目标元素。',
      route: '/learn/07-gesture-handler/05-pinch/basic',
    },
    {
      id: 'gesture__pinch__viewer',
      title: '图片查看器',
      description: '双指缩放与单指平移通过 Simultaneous 同时生效。',
      route: '/learn/07-gesture-handler/05-pinch/viewer',
    },
    {
      id: 'gesture__pinch__focal-zoom',
      title: '以焦点为中心缩放',
      description: '基于 focalX/focalY 调整平移，让缩放围绕手势焦点。',
      route: '/learn/07-gesture-handler/05-pinch/focal-zoom',
    },
  ],
};

export default article;
