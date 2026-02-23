import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { useRouter } from 'expo-router';

import { CategoryCard } from '@/components/category-card';
import { categories } from '@/content/learn';

export default function LearnScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white dark:bg-[#151718]">
      <FlatList
        data={categories}
        keyExtractor={item => item.id}
        contentContainerClassName="p-4 pb-8"
        ListHeaderComponent={
          <View className="mb-4 pt-12">
            <Text className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Learn
            </Text>
            <Text className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Explore articles and interactive demos from Keepzml rncross.
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <CategoryCard
            category={item}
            onPress={() =>
              router.push({
                pathname: '/learn/[categoryId]',
                params: { categoryId: item.id },
              })
            }
          />
        )}
        ItemSeparatorComponent={() => <View className="h-3" />}
      />
    </View>
  );
}
