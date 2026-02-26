import { Article } from '@/types/learn';

const article: Article = {
  id: '04-runon',
  title: 'runOnJS 与 runOnUI',
  description: '在 UI 与 JS 线程之间传递信息与触发动画。',
  demos: [
    {
      id: 'reanimated__runon__thread-communication',
      title: '线程协作示例',
      description: '跨线程触发状态更新与动画执行。',
      route: '/learn/06-reanimated/04-runon/thread-communication',
    },
    {
      id: 'reanimated__runon__like-rollback',
      title: '点赞失败回滚',
      description: '点击点赞后先播动画，结束后 runOnJS 发起请求并在失败时回滚。',
      route: '/learn/06-reanimated/04-runon/like-rollback',
    },
  ],
};

export default article;
