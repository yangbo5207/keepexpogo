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
      route: '/learn/03-styling/01-nativewind/tailwind-basics',
      component: () => import('./TailwindBasics'),
    },
    {
      id: 'styling__nativewind__style-compare',
      title: 'StyleSheet vs className',
      description: 'Compare React Native StyleSheet with NativeWind className approach.',
      route: '/learn/03-styling/01-nativewind/style-compare',
      component: () => import('./StyleCompare'),
    },
    {
      id: 'styling__nativewind__responsive-layout',
      title: 'Responsive Layout',
      description: 'Responsive design with sm:, md:, lg: breakpoint utilities.',
      route: '/learn/03-styling/01-nativewind/responsive-layout',
      component: () => import('./ResponsiveLayout'),
    },
    {
      id: 'styling__nativewind__dark-mode',
      title: 'Dark Mode',
      description: 'Dark mode toggle using dark: prefix and useColorScheme.',
      route: '/learn/03-styling/01-nativewind/dark-mode-toggle',
      component: () => import('./DarkModeToggle'),
    },
    {
      id: 'styling__nativewind__pressable-states',
      title: 'Pressable States',
      description: 'Interactive state variants with active: and focus: prefixes.',
      route: '/learn/03-styling/01-nativewind/pressable-states',
      component: () => import('./PressableStates'),
    },
  ],
};

export default article;
