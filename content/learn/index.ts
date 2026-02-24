import { Category, DemoCase } from '@/types/learn';
import reactBasics from './01-react-basics';
import navigation from './02-navigation';
import styling from './03-styling';
import expoRouter from './04-expo-router';

export const categories: Category[] = [
  reactBasics,
  navigation,
  styling,
  expoRouter,
].sort((a, b) => a.order - b.order);

export function getCategoryById(id: string): Category | undefined {
  return categories.find(c => c.id === id);
}

export function getDemoById(id: string): DemoCase | undefined {
  for (const category of categories) {
    for (const article of category.articles) {
      const demo = article.demos.find(d => d.id === id);
      if (demo) return demo;
    }
  }
  return undefined;
}
