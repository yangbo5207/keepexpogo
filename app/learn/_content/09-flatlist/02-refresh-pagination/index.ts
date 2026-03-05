import { Article } from '@/types/learn';

const article: Article = {
  id: '02-refresh-pagination',
  title: '下拉刷新与分页加载',
  description: '掌握 FlatList 的 refreshing、onRefresh 以及分页加载入口。',
  demos: [
    {
      id: 'flatlist__refresh_pagination__pull_to_refresh_basic',
      title: '下拉刷新（基础）',
      description: '通过 refreshing + onRefresh 实现下拉刷新交互。',
      route: '/learn/09-flatlist/02-refresh-pagination/pull-to-refresh',
    },
    {
      id: 'flatlist__refresh_pagination__refresh_and_load_more',
      title: '下拉刷新 + 分页加载',
      description: '同时支持下拉刷新与滚动到底部自动加载更多。',
      route: '/learn/09-flatlist/02-refresh-pagination/refresh-and-load-more',
    },
  ],
};

export default article;
