import { Article } from '@/types/learn';

const article: Article = {
  id: '03-pan',
  title: 'Pan 拖拽手势',
  description: '通过平移手势实现拖拽与跟手反馈。',
  demos: [
    {
      id: 'gesture__pan__basic',
      title: '基础使用',
      description: '一个可拖拽的方块，松手后停留在当前位置。',
      route: '/learn/07-gesture-handler/03-pan/basic',
    },
    {
      id: 'gesture__pan__decay',
      title: '偏移量 + 惯性',
      description: '拖拽结束后根据松手速度继续惯性滑动。',
      route: '/learn/07-gesture-handler/03-pan/decay',
    },
    {
      id: 'gesture__pan__swipe-card',
      title: '滑动卡片',
      description: '类似 Tinder 的左右滑动，阈值不足则回弹。',
      route: '/learn/07-gesture-handler/03-pan/swipe-card',
    },
    {
      id: 'gesture__pan__bounded-drag',
      title: '带边界的拖拽',
      description: '将元素限制在矩形区域内，拖拽不会越界。',
      route: '/learn/07-gesture-handler/03-pan/bounded-drag',
    },
    {
      id: 'gesture__pan__bottom-sheet',
      title: '底部弹出面板',
      description: '垂直拖拽配合吸附点，实现展开、半展开、收起。',
      route: '/learn/07-gesture-handler/03-pan/bottom-sheet',
    },
  ],
};

export default article;
