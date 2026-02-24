import { Article } from '@/types/learn';

const article: Article = {
  id: '02-theme',
  title: 'Custom Themes',
  description: 'Customize themes and build a design system with NativeWind.',
  demos: [
    {
      id: 'styling__theme__custom-colors',
      title: 'Custom Colors',
      description: 'Brand color palettes with @theme, opacity modifiers, and practical use cases.',
      component: () => import('./CustomColors'),
    },
    {
      id: 'styling__theme__design-tokens',
      title: 'Design Tokens',
      description: 'TypeScript token objects for type-safe, consistent styling across components.',
      component: () => import('./DesignTokens'),
    },
    {
      id: 'styling__theme__platform-styles',
      title: 'Platform Styles',
      description: 'Platform-specific styling with ios:, android:, web:, and native: variants.',
      component: () => import('./PlatformStyles'),
    },
  ],
};

export default article;
