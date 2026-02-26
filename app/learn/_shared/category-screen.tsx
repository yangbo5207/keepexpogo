import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { ChevronRight } from "lucide-react-native";

import { Card } from "@/components/ui/card";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { ListRow, ListRowGroup } from "@/components/ui/list-row";
import { getCategoryById } from "@/content/learn";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function CategoryScreenBase({ categoryId: categoryIdOverride }: { categoryId?: string }) {
  const { categoryId } = useLocalSearchParams<{ categoryId: string }>();
  const router = useRouter();
  const id = categoryIdOverride ?? (Array.isArray(categoryId) ? categoryId[0] : categoryId);
  const category = id ? getCategoryById(id) : undefined;
  const theme = useColorScheme() ?? "light";
  const iconColor = theme === "dark" ? "#e6d5ce" : "#6e4d38";
  const arrowColor = theme === "dark" ? "#9e978a" : "#b3a57e";
  const insets = useSafeAreaInsets();

  if (!category) {
    return (
      <View className="flex-1 items-center justify-center bg-cream-50 dark:bg-night-800">
        <Stack.Screen options={{ title: "Not Found" }} />
        <Text className="text-cream-900 dark:text-night-50">Category not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-cream-50 dark:bg-night-800 p-4">
      <Stack.Screen options={{ title: category.title, headerShown: true }} />
      <Card className="mb-6">
        <Card.Header>
          <Card.Icon>
            <IconSymbol name={category.icon as any} size={18} color={iconColor} />
          </Card.Icon>
          <Card.Eyebrow>{category.articles.length} 篇文章</Card.Eyebrow>
        </Card.Header>
        <Card.Title>{category.title}</Card.Title>
        <Card.Description>{category.description}</Card.Description>
      </Card>

      <Text className="text-xs font-semibold uppercase tracking-widest text-cream-600 dark:text-night-200">
        文章列表
      </Text>
      <ListRowGroup className="mt-4">
        {category.articles.map((article, index) => (
          <ListRow
            key={article.id}
            title={article.title}
            description={article.description}
            left={
              <View className="h-8 w-8 items-center justify-center rounded-full bg-primary-200 dark:bg-primary-800">
                <Text className="text-xs font-semibold text-primary-700 dark:text-primary-200">
                  {String(index + 1).padStart(2, "0")}
                </Text>
              </View>
            }
            right={<ChevronRight size={18} color={arrowColor} />}
            onPress={() => router.push(`/learn/${category.id}/${article.id}` as any)}
          />
        ))}
      </ListRowGroup>
      <View style={{ height: insets.bottom }} />
    </ScrollView>
  );
}
