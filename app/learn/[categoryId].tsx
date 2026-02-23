import React from 'react';
import { FlatList, Pressable, View, Text } from 'react-native';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';

import { Collapsible } from '@/components/ui/collapsible';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { getCategoryById } from '@/content/learn';

export default function CategoryScreen() {
  const { categoryId } = useLocalSearchParams<{ categoryId: string }>();
  const router = useRouter();
  const theme = useColorScheme() ?? 'light';
  const category = getCategoryById(categoryId);

  if (!category) {
    return (
      <View className="flex-1 items-center justify-center bg-white dark:bg-[#151718]">
        <Stack.Screen options={{ title: 'Not Found' }} />
        <Text className="text-gray-900 dark:text-gray-100">Category not found.</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white dark:bg-[#151718]">
      <Stack.Screen options={{ title: category.title }} />
      <FlatList
        data={category.articles}
        keyExtractor={item => item.id}
        contentContainerClassName="p-4 pb-10"
        ListHeaderComponent={
          <View className="mb-6 pt-2">
            <View className="mb-3 self-start rounded-full bg-cyan-700/10 px-2.5 py-1 dark:bg-cyan-400/15">
              <Text className="text-xs font-semibold text-cyan-700 dark:text-cyan-400">
                {category.articles.length} article{category.articles.length !== 1 ? 's' : ''}
              </Text>
            </View>
            <Text className="mb-1.5 text-[28px] font-bold leading-tight text-gray-900 dark:text-gray-100">
              {category.title}
            </Text>
            <Text className="text-[15px] leading-snug text-gray-500 dark:text-gray-400">
              {category.description}
            </Text>
          </View>
        }
        renderItem={({ item: article, index }) => (
          <View className="overflow-hidden rounded-2xl bg-neutral-100 p-4 dark:bg-neutral-800/80">
            {/* Article header */}
            <View className="mb-3.5 flex-row items-start gap-3">
              <View
                className="h-9 w-9 items-center justify-center rounded-[10px]"
                style={{ backgroundColor: Colors[theme].tint }}>
                <Text className="text-sm font-bold text-white">
                  {String(index + 1).padStart(2, '0')}
                </Text>
              </View>
              <View className="flex-1 gap-0.5">
                <Text className="text-[17px] font-semibold leading-snug text-gray-900 dark:text-gray-100">
                  {article.title}
                </Text>
                <Text className="text-[13px] leading-snug text-gray-500 dark:text-gray-400">
                  {article.description}
                </Text>
              </View>
            </View>

            {/* Divider */}
            <View className="mb-3 h-px bg-neutral-200 dark:bg-neutral-700" />

            {/* Collapsible demo section */}
            <View className="rounded-xl bg-white p-3.5 dark:bg-neutral-700/50">
              <Collapsible title={`${article.demos.length} Demo${article.demos.length !== 1 ? 's' : ''}`}>
                <View className="-ml-6 mt-2 gap-2.5">
                  {article.demos.map(demo => (
                    <Pressable
                      key={demo.id}
                      className="flex-row items-center gap-3 rounded-xl bg-neutral-100 p-3.5 active:bg-neutral-200 dark:bg-neutral-600/50 dark:active:bg-neutral-600"
                      onPress={() =>
                        router.push({
                          pathname: '/learn/demo/[demoId]',
                          params: { demoId: demo.id },
                        })
                      }>
                      {/* Demo icon */}
                      <View
                        className="h-10 w-10 items-center justify-center rounded-xl"
                        style={{ backgroundColor: Colors[theme].tint + '18' }}>
                        <IconSymbol
                          name="chevron.left.forwardslash.chevron.right"
                          size={18}
                          color={Colors[theme].tint}
                        />
                      </View>

                      {/* Demo info */}
                      <View className="flex-1 gap-0.5">
                        <Text className="text-[15px] font-semibold text-gray-900 dark:text-gray-100">
                          {demo.title}
                        </Text>
                        <Text className="text-xs leading-snug text-gray-400 dark:text-gray-500" numberOfLines={2}>
                          {demo.description}
                        </Text>
                      </View>

                      {/* Run button */}
                      <View
                        className="h-7 w-7 items-center justify-center rounded-full"
                        style={{ backgroundColor: Colors[theme].tint }}>
                        <IconSymbol name="chevron.right" size={14} color="#fff" />
                      </View>
                    </Pressable>
                  ))}
                </View>
              </Collapsible>
            </View>
          </View>
        )}
        ItemSeparatorComponent={() => <View className="h-3.5" />}
      />
    </View>
  );
}
