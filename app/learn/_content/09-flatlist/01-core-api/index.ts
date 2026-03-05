import { Article } from '@/types/learn';

const article: Article = {
  id: '01-core-api',
  title: 'FlatList 核心 API',
  description: '从 data、renderItem、keyExtractor 开始掌握 FlatList 的基础使用方式。',
  demos: [
    {
      id: 'flatlist__core__basic',
      title: '基础使用',
      description: '使用 data + renderItem 渲染联系人列表。',
      route: '/learn/09-flatlist/01-core-api/basic',
    },
    {
      id: 'flatlist__core__list-header-component',
      title: 'ListHeaderComponent',
      description: '为列表添加头部区域，展示标题与统计信息。',
      route: '/learn/09-flatlist/01-core-api/header',
    },
    {
      id: 'flatlist__core__list-footer-component',
      title: 'ListFooterComponent',
      description: '在列表底部展示加载中或“没有更多了”状态。',
      route: '/learn/09-flatlist/01-core-api/footer',
    },
    {
      id: 'flatlist__core__list-empty-component',
      title: 'ListEmptyComponent',
      description: '当列表为空时渲染空状态占位内容。',
      route: '/learn/09-flatlist/01-core-api/empty',
    },
    {
      id: 'flatlist__core__item-separator-component',
      title: 'ItemSeparatorComponent',
      description: '为相邻列表项插入自定义分隔线。',
      route: '/learn/09-flatlist/01-core-api/separator',
    },
    {
      id: 'flatlist__core__contact-list-complete',
      title: '完整联系人列表',
      description: '组合 Header / Empty / Separator / Item，完成一个实用联系人列表示例。',
      route: '/learn/09-flatlist/01-core-api/contact-list',
    },
  ],
};

export default article;
