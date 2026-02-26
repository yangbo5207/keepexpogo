import React from "react";
import { Stack, useLocalSearchParams, usePathname, useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { ChevronRight } from "lucide-react-native";

import { Card } from "@/components/ui/card";
import { ListRow, ListRowGroup } from "@/components/ui/list-row";
import { getCategoryById } from "@/app/learn/_content";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { DemoBackButton } from "@/components/demo-back-button";

export function ArticleScreenBase({ categoryId: categoryIdOverride, articleId: articleIdOverride }: { categoryId?: string; articleId?: string }) {
  const { categoryId, articleId } = useLocalSearchParams<{ categoryId: string; articleId: string }>();
  const router = useRouter();
  const pathname = usePathname();
  const theme = useColorScheme() ?? "light";
  const arrowColor = theme === "dark" ? "#9e978a" : "#b3a57e";
  const resolvedCategoryId = categoryIdOverride ?? categoryId;
  const resolvedArticleId = articleIdOverride ?? articleId;
  const category = resolvedCategoryId ? getCategoryById(resolvedCategoryId) : undefined;
  const article = category?.articles.find((item) => item.id === resolvedArticleId);

  if (!category || !article) {
    return (
      <View className="flex-1 items-center justify-center bg-cream-50 dark:bg-night-800">
        <Stack.Screen options={{ title: "Not Found" }} />
        <Text className="text-cream-900 dark:text-night-50">Article not found.</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-cream-50 dark:bg-night-800">
      <Stack.Screen options={{ title: article.title, headerShown: true, headerLeft: () => <DemoBackButton /> }} />
      <ScrollView contentContainerClassName="px-4 pb-12 pt-16">
        <Card className="mb-6">
        <Card.Header>
          <Card.Eyebrow>{article.demos.length} 个演示</Card.Eyebrow>
        </Card.Header>
        <Card.Title>{article.title}</Card.Title>
        <Card.Description>{article.description}</Card.Description>
        <Text className="mt-3 text-sm text-cream-800 underline dark:text-cream-200">
          Path: {pathname}
        </Text>
      </Card>

        <Text className="text-xs font-semibold uppercase tracking-widest text-cream-600 dark:text-night-200">
          互动演示
        </Text>
        <ListRowGroup className="mt-4">
          {article.demos.map((demo) => (
            <ListRow
              key={demo.id}
              title={demo.title}
              description={demo.description}
              right={
                demo.route ? (
                  <ChevronRight size={18} color={arrowColor} />
                ) : undefined
              }
              disabled={!demo.route}
              onPress={
                demo.route ? () => router.push(demo.route as any) : undefined
              }
            />
          ))}
        </ListRowGroup>
      </ScrollView>
    </View>
  );
}
