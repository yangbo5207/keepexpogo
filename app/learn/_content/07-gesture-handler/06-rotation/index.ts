import { Article } from '@/types/learn';

const article: Article = {
  id: '06-rotation',
  title: 'Rotation 旋转手势',
  description: '通过双指旋转手势驱动目标元素旋转。',
  demos: [
    {
      id: 'gesture__rotation__basic',
      title: '基础用法',
      description: '双指旋转手势控制目标元素的旋转角度。',
      route: '/learn/07-gesture-handler/06-rotation/basic',
    },
    {
      id: 'gesture__rotation__snap-90',
      title: '吸附到 90 度',
      description: '松手后自动吸附到最近的 90° 整数倍。',
      route: '/learn/07-gesture-handler/06-rotation/snap-90',
    },
    {
      id: 'gesture__rotation__knob',
      title: '旋钮控件',
      description: '限制 270° 旋转范围，并映射到 0-100 业务值。',
      route: '/learn/07-gesture-handler/06-rotation/knob',
    },
  ],
};

export default article;
