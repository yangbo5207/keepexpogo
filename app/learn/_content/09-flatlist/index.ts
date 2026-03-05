import { Category } from '@/types/learn';
import flatListCoreApi from './01-core-api';
import flatListRefreshPagination from './02-refresh-pagination';
import sectionListArticle from './03-sectionlist';
import horizontalGridArticle from './04-horizontal-grid';
import chatMessageListArticle from './05-chat-message-list';

const category: Category = {
  id: '09-flatlist',
  title: 'FlatList 列表',
  description: '系统学习 FlatList 的核心 API 和列表渲染实践。',
  icon: 'list.bullet.rectangle.portrait',
  order: 9,
  articles: [flatListCoreApi, flatListRefreshPagination, sectionListArticle, horizontalGridArticle, chatMessageListArticle],
};

export default category;
