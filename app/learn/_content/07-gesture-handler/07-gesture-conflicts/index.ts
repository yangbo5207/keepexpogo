import { Article } from '@/types/learn';

const article: Article = {
  id: '07-gesture-conflicts',
  title: '手势冲突与协商',
  description: '处理单击、双击、滚动等手势之间的优先级与协作关系。',
  demos: [
    {
      id: 'gesture__conflicts__tap-vs-doubletap',
      title: '点击选中，双击点赞',
      description: '双击优先、单击等待失败；在 ScrollView 中保持滚动不受影响。',
      route: '/learn/07-gesture-handler/07-gesture-conflicts/tap-vs-doubletap',
    },
    {
      id: 'gesture__conflicts__tap-doubletap-longpress-drag',
      title: '点击、双击、长按拖拽',
      description: '长按触发拖拽，松手回位；同时保留单击选中与双击点赞。',
      route: '/learn/07-gesture-handler/07-gesture-conflicts/tap-doubletap-longpress-drag',
    },
  ],
};

export default article;
