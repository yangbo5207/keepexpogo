import { Article } from '@/types/learn';

const article: Article = {
  id: '03-sectionlist',
  title: 'SectionList 分组列表',
  description: '学习按分组渲染列表，并实现通讯录常见的右侧索引跳转。',
  demos: [
    {
      id: 'sectionlist__contact_book__index_list',
      title: '通讯录索引列表',
      description: '按首字母分组联系人，并通过右侧字母索引快速跳转到对应分组。',
      route: '/learn/09-flatlist/03-sectionlist/contact-book',
    },
  ],
};

export default article;
