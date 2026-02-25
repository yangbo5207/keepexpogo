import { useRouter } from "expo-router";
import { ChevronRight, Sparkles } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";

import { Card } from "@/components/ui/card";
import { CollapsibleHeaderScrollView } from "@/components/ui/collapsible-header-scroll-view";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { ListRow, ListRowGroup } from "@/components/ui/list-row";
import { categories } from "@/content/learn";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function LearnScreen() {
  const router = useRouter();
  const theme = useColorScheme() ?? "light";
  const iconColor = theme === "dark" ? "#e6d5ce" : "#6e4d38";
  const arrowColor = theme === "dark" ? "#9e978a" : "#b3a57e";

  return (
    <View className="flex-1 bg-cream-50 dark:bg-night-800">
      <CollapsibleHeaderScrollView
        title="主题与知识库"
        subtitle="Learn"
        containerClassName="bg-cream-50 dark:bg-night-800"
        headerBackgroundClassName="bg-cream-100/95 dark:bg-night-700/95"
        className="px-4 pb-8"
        contentTopInset={12}
      >
        <Card className="my-8">
          <Card.Header>
            <Card.Icon>
              <Sparkles size={14} color={iconColor} />
            </Card.Icon>
            <Card.Eyebrow>精选内容</Card.Eyebrow>
          </Card.Header>
          <Card.Title>低饱和主题的实践方式</Card.Title>
          <Card.Description>
            从色板到动效的完整思路，帮助你保持界面统一与使用体验顺滑。
          </Card.Description>
        </Card>

        <Text className="text-xs font-semibold uppercase tracking-widest text-cream-600 dark:text-night-200">
          分类导航
        </Text>
        <ListRowGroup className="mt-4">
          {categories.map((item) => (
            <ListRow
              key={item.id}
              title={item.title}
              description={`${item.description} · ${item.articles.length} 篇`}
              left={
                <IconSymbol
                  name={item.icon as any}
                  size={22}
                  color={iconColor}
                />
              }
              right={<ChevronRight size={18} color={arrowColor} />}
              onPress={() =>
                router.push({
                  pathname: "/learn/[categoryId]",
                  params: { categoryId: item.id },
                })
              }
            />
          ))}
        </ListRowGroup>
      </CollapsibleHeaderScrollView>
    </View>
  );
}
