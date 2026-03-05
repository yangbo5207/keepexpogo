import { Article } from '@/types/learn';

const article: Article = {
  id: '04-horizontal-grid',
  title: '横向列表与网格布局',
  description: '使用 FlatList 实现横向卡片流与网格布局的常见模式。',
  demos: [
    {
      id: 'flatlist__horizontal_grid__horizontal_list',
      title: '横向列表',
      description: '通过 horizontal + ItemSeparatorComponent 渲染横向卡片列表。',
      route: '/learn/09-flatlist/04-horizontal-grid/horizontal-list',
    },
    {
      id: 'flatlist__horizontal_grid__equal_width_grid',
      title: '等宽网格',
      description: '通过 numColumns 将列表变成等宽网格布局。',
      route: '/learn/09-flatlist/04-horizontal-grid/equal-grid',
    },
  ],
};

export default article;
