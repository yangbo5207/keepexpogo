import { Article } from '@/types/learn';

const article: Article = {
  id: '04-components',
  title: 'Custom Components',
  description: 'Reusable component library with variants, dark mode, and composition patterns.',
  demos: [
    {
      id: 'styling__components__styled-buttons',
      title: 'Styled Buttons',
      description: 'Button component with variant × size matrix, disabled and loading states.',
      component: () => import('./StyledButtons'),
    },
    {
      id: 'styling__components__form-components',
      title: 'Form Components',
      description: 'Input component with label, error state, and peer-focus interaction.',
      component: () => import('./FormComponents'),
    },
    {
      id: 'styling__components__card-and-layout',
      title: 'Card & Layout',
      description: 'Card, Badge, Avatar, Alert components and a combined user profile card.',
      component: () => import('./CardAndLayout'),
    },
  ],
};

export default article;
