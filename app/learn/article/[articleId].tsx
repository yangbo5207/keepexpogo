import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { ChevronRight } from "lucide-react-native";
import React from "react";
import { ScrollView, Text, View } from "react-native";

import { Card } from "@/components/ui/card";
import { ListRow, ListRowGroup } from "@/components/ui/list-row";
import { getArticleById } from "@/content/learn";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ArticleScreen() {
  const { articleId } = useLocalSearchParams<{ articleId: string }>();
  const router = useRouter();
  const theme = useColorScheme() ?? "light";
  const id = Array.isArray(articleId) ? articleId[0] : articleId;
  const article = id ? getArticleById(id) : undefined;
  const arrowColor = theme === "dark" ? "#9e978a" : "#b3a57e";
  const insets = useSafeAreaInsets();

  if (!article) {
    return (
      <View className="flex-1 items-center justify-center bg-cream-50 dark:bg-night-800">
        <Stack.Screen options={{ title: "Not Found" }} />
        <Text className="text-cream-900 dark:text-night-50">
          Article not found.
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-cream-50 dark:bg-night-800">
      <Stack.Screen options={{ title: article.title }} />
      <ScrollView contentContainerClassName="p-4">
        <Card className="mb-6">
          <Card.Header>
            <Card.Eyebrow>{article.demos.length} 个演示</Card.Eyebrow>
          </Card.Header>
          <Card.Title>{article.title}</Card.Title>
          <Card.Description>{article.description}</Card.Description>
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
              right={<ChevronRight size={18} color={arrowColor} />}
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
            />
          ))}
        </ListRowGroup>
        <View style={{ height: insets.bottom }} />
      </ScrollView>
    </View>
  );
}
