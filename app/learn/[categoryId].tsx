import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { FlatList, Pressable, Text, View } from "react-native";

import { IconSymbol } from "@/components/ui/icon-symbol";
import { getCategoryById } from "@/content/learn";

const ACCENT = "#0a7ea4";

export default function CategoryScreen() {
  const { categoryId } = useLocalSearchParams<{ categoryId: string }>();
  const router = useRouter();
  const category = getCategoryById(categoryId);

  if (!category) {
    return (
      <View className="flex-1 items-center justify-center bg-white dark:bg-[#151718]">
        <Stack.Screen options={{ title: "Not Found" }} />
        <Text className="text-gray-900 dark:text-gray-100">
          Category not found.
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white dark:bg-[#151718]">
      <Stack.Screen options={{ title: category.title }} />
      <FlatList
        data={category.articles}
        keyExtractor={(item) => item.id}
        contentContainerClassName="p-4 pb-10"
        ListHeaderComponent={
          <View className="mb-6 pt-2">
            <View className="mb-3 self-start rounded-full bg-cyan-700/10 px-2.5 py-1 dark:bg-cyan-400/15">
              <Text className="text-xs font-semibold text-cyan-700 dark:text-cyan-400">
                {category.articles.length} article
                {category.articles.length !== 1 ? "s" : ""}
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
          <Pressable
            className="flex-row items-center gap-3 rounded-2xl bg-neutral-100 p-4 active:bg-neutral-200 dark:bg-neutral-800/80 dark:active:bg-neutral-700/80"
            onPress={() =>
              router.push({
                pathname: "/learn/article/[articleId]",
                params: { articleId: article.id },
              })
            }
          >
            <View
              className="h-9 w-9 items-center justify-center rounded-button"
              style={{ backgroundColor: ACCENT }}
            >
              <Text className="text-sm font-bold text-white">
                {String(index + 1).padStart(2, "0")}
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
            <IconSymbol name="chevron.right" size={18} color="#9ca3af" />
          </Pressable>
        )}
        ItemSeparatorComponent={() => <View className="h-3" />}
      />
    </View>
  );
}
