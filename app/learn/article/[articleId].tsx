import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { FlatList, Pressable, Text, View } from "react-native";

import { getArticleById } from "@/content/learn";

export default function ArticleScreen() {
  const { articleId } = useLocalSearchParams<{ articleId: string }>();
  const router = useRouter();
  const article = getArticleById(articleId);

  if (!article) {
    return (
      <View className="flex-1 items-center justify-center bg-white dark:bg-[#151718]">
        <Stack.Screen options={{ title: "Not Found" }} />
        <Text className="text-gray-900 dark:text-gray-100">
          Article not found.
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white dark:bg-[#151718]">
      <Stack.Screen options={{ title: article.title }} />
      <FlatList
        data={article.demos}
        keyExtractor={(item) => item.id}
        contentContainerClassName="p-4 pb-10"
        ListHeaderComponent={
          <View className="items-center gap-2 pt-4 pb-4">
            <Text className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              {article.title}
            </Text>
            <Text className="text-center text-sm text-gray-500 dark:text-gray-400">
              {article.description}
            </Text>
          </View>
        }
        renderItem={({ item: demo }) => (
          <Pressable
            className="rounded-xs bg-orange-50 p-4 active:bg-orange-100 dark:bg-orange-900/20 dark:active:bg-orange-900/30"
            onPress={() => {
              if (demo.route) {
                router.push(demo.route as any);
              } else {
                router.push({
                  pathname: "/learn/demo/[demoId]",
                  params: { demoId: demo.id },
                });
              }
            }}
          >
            <View className="flex-row items-center gap-3">
              <View className="h-12 w-12 items-center justify-center rounded-xs bg-orange-100 dark:bg-orange-800/30">
                <MaterialIcons
                  name="chevron-right"
                  size={24}
                  color="#f97316"
                />
              </View>
              <View className="flex-1">
                <Text className="text-base font-semibold text-gray-800 dark:text-gray-100">
                  {demo.title}
                </Text>
                <Text
                  className="mt-0.5 text-xs text-gray-500 dark:text-gray-400"
                  numberOfLines={2}
                >
                  {demo.description}
                </Text>
              </View>
              <Text className="text-lg text-gray-400">&rsaquo;</Text>
            </View>
          </Pressable>
        )}
        ItemSeparatorComponent={() => <View className="h-4" />}
      />
    </View>
  );
}
