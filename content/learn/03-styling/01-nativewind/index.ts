import { Article } from '@/types/learn';

const article: Article = {
  id: '01-nativewind',
  title: 'NativeWind Basics',
  description: 'Use Tailwind CSS classes to style your React Native components.',
  demos: [
    {
      id: 'styling__nativewind__tailwind-basics',
      title: 'Tailwind Basics',
      description: 'Exploring common Tailwind utility classes in React Native.',
      component: () => import('./TailwindBasics'),
    },
  ],
};

export default article;
