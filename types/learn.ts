import { ComponentType } from 'react';

export interface Category {
  id: string;
  title: string;
  description: string;
  icon: string;
  order: number;
  articles: Article[];
}

export interface Article {
  id: string;
  title: string;
  description: string;
  demos: DemoCase[];
}

export interface DemoCase {
  id: string;
  title: string;
  description: string;
  component: () => Promise<{ default: ComponentType }>;
}
