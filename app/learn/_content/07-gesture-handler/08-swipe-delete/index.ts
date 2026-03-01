import { Article } from '@/types/learn';

const article: Article = {
  id: '08-swipe-delete',
  title: '实战：侧滑删除列表项',
  description: '通过水平 Pan 手势实现列表项侧滑露出删除按钮。',
  demos: [
    {
      id: 'gesture__practical__swipe-delete',
      title: '侧滑删除列表项',
      description: '内容层左滑露出底层删除按钮，支持阈值吸附与删除动作。',
      route: '/learn/07-gesture-handler/08-swipe-delete/swipe-delete',
    },
    {
      id: 'gesture__practical__swipe-actions-exit',
      title: '多操作按钮 + 删除退场动画',
      description: '支持置顶/删除按钮；删除时先滑出、再收缩淡出，最后移除数据。',
      route: '/learn/07-gesture-handler/08-swipe-delete/swipe-actions-exit',
    },
  ],
};

export default article;
