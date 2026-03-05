import React from 'react';
import { Pressable, View, Text } from 'react-native';

import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Category } from '@/types/learn';

interface CategoryCardProps {
  category: Category;
  onPress: () => void;
}

export function CategoryCard({ category, onPress }: CategoryCardProps) {
  const theme = useColorScheme() ?? 'light';

  return (
    <Pressable onPress={onPress}>
      <View className="flex-row items-center gap-3 rounded-xs bg-cream-100 p-4 dark:bg-night-700">
        <IconSymbol
          name={category.icon as any}
          size={32}
          color={Colors[theme].tint}
        />
        <View className="flex-1 gap-0.5">
          <Text className="text-base font-semibold text-cream-900 dark:text-night-50">
            {category.title}
          </Text>
          <Text className="text-[13px] text-cream-600 dark:text-night-300">
            {category.description}
          </Text>
          <Text className="mt-0.5 text-xs text-cream-500 dark:text-night-400">
            {category.articles.length} article{category.articles.length !== 1 ? 's' : ''}
          </Text>
        </View>
        <IconSymbol
          name="chevron.right"
          size={20}
          color={Colors[theme].icon}
        />
      </View>
    </Pressable>
  );
}
