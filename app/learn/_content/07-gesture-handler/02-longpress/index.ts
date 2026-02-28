import { Article } from '@/types/learn';

const article: Article = {
  id: '02-longpress',
  title: 'LongPress 长按手势',
  description: '长按识别、触发时机与按下反馈。',
  demos: [
    {
      id: 'gesture__longpress__basic',
      title: '基础使用',
      description: '按下缩小、识别成功后执行动作，松开统一恢复。',
      route: '/learn/07-gesture-handler/02-longpress/basic',
    },
    {
      id: 'gesture__longpress__hold-progress',
      title: '长按进度反馈',
      description: '按下立即启动进度条，按满 2 秒后执行确认动作。',
      route: '/learn/07-gesture-handler/02-longpress/hold-progress',
    },
    {
      id: 'gesture__longpress__longpress-drag',
      title: '长按触发拖拽',
      description: '长按激活拖拽模式，拖动结束后自动回弹。',
      route: '/learn/07-gesture-handler/02-longpress/longpress-drag',
    },
    {
      id: 'gesture__longpress__context-menu',
      title: '上下文菜单',
      description: '长按弹出菜单，滑动高亮选项，松手确认操作。',
      route: '/learn/07-gesture-handler/02-longpress/context-menu',
    },
  ],
};

export default article;
