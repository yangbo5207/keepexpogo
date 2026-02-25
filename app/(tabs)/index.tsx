import { CollapsibleHeaderScrollView } from "@/components/ui/collapsible-header-scroll-view";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Link } from "expo-router";
import { ArrowRight, BookOpen, Compass, Sparkles } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";

const highlightCards = [
  {
    title: "组件画廊",
    description: "查看所有 UI 组件与交互示例",
    href: "/components-gallery" as const,
    icon: GridIcon,
  },
  {
    title: "动画示例",
    description: "体验 Reanimated 驱动的动效",
    href: "/expo-demos/reanimated-basic" as const,
    icon: Sparkles,
  },
  {
    title: "学习中心",
    description: "阅读与项目相关的专题内容",
    href: "/learn/1" as const,
    icon: BookOpen,
  },
];

function GridIcon({ size, color }: { size: number; color: string }) {
  return <Compass size={size} color={color} />;
}

export default function HomeScreen() {
  const theme = useColorScheme() ?? "light";
  const iconColor = theme === "dark" ? "#e6d5ce" : "#735047";
  const arrowColor = theme === "dark" ? "#9e978a" : "#b3a57e";

  return (
    <View className="flex-1 bg-cream-50 dark:bg-night-800">
      <CollapsibleHeaderScrollView
        title="Creamy UI Library"
        subtitle="Keep Expogo"
        containerClassName="bg-cream-50 dark:bg-night-800"
        headerBackgroundClassName="bg-cream-100/95 dark:bg-night-700/95"
        className="px-5 pb-14"
      >
        <View className="my-8 rounded-2xl border border-cream-200 bg-cream-100 p-5 dark:border-night-600 dark:bg-night-700">
          <Text className="text-xs font-semibold uppercase tracking-widest text-cream-600 dark:text-night-200">
            今日焦点
          </Text>
          <Text className="mt-3 text-xl font-semibold text-cream-900 dark:text-night-50">
            全新 Switch 与 ListRow 交互
          </Text>
          <Text className="mt-2 text-sm leading-5 text-cream-700 dark:text-night-200">
            使用 spring
            动画的开关和可分组的列表行，适配暗色模式，并提供轻微弹簧反馈。
          </Text>
          <Link
            href="/component-demos/switch"
            className="mt-4 self-start rounded-full bg-primary-500 px-4 py-2"
          >
            <Text className="text-sm font-semibold text-white">查看演示</Text>
          </Link>
        </View>

        <View className="mb-4">
          <Text className="text-xs font-semibold uppercase tracking-widest text-cream-600 dark:text-night-200">
            快速入口
          </Text>
          <View className="mt-4 gap-4">
            {highlightCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="rounded-2xl border border-cream-200 bg-cream-100 p-4 dark:border-night-600 dark:bg-night-700"
              >
                <View className="flex-row items-center">
                  <View className="mr-3 rounded-full bg-secondary-100 p-2 dark:bg-night-600">
                    <card.icon size={18} color={iconColor} />
                  </View>
                  <View className="flex-1">
                    <Text className="text-base font-semibold text-cream-900 dark:text-night-50">
                      {card.title}
                    </Text>
                    <Text className="mt-1 text-sm text-cream-700 dark:text-night-200">
                      {card.description}
                    </Text>
                  </View>
                  <ArrowRight size={18} color={arrowColor} />
                </View>
              </Link>
            ))}
          </View>
        </View>

        <View className="mt-6 rounded-2xl border border-cream-200 bg-cream-100 p-5 dark:border-night-600 dark:bg-night-700">
          <Text className="text-xs font-semibold uppercase tracking-widest text-cream-600 dark:text-night-200">
            导航提示
          </Text>
          <Text className="mt-3 text-sm leading-6 text-cream-700 dark:text-night-200">
            使用底部导航进入 Explore 了解主题细节，进入 Profile
            管理设置与组件演示。
          </Text>
          <View className="mt-4 flex-row gap-3">
            <View className="flex-1 rounded-xl border border-cream-300 bg-cream-200 px-3 py-2 dark:border-night-500 dark:bg-night-600">
              <Text className="text-xs font-semibold uppercase text-cream-700 dark:text-night-200">
                Explore
              </Text>
              <Text className="mt-1 text-sm text-cream-800 dark:text-night-50">
                主题指南
              </Text>
            </View>
            <View className="flex-1 rounded-xl border border-cream-300 bg-cream-200 px-3 py-2 dark:border-night-500 dark:bg-night-600">
              <Text className="text-xs font-semibold uppercase text-cream-700 dark:text-night-200">
                Profile
              </Text>
              <Text className="mt-1 text-sm text-cream-800 dark:text-night-50">
                设置中心
              </Text>
            </View>
          </View>
        </View>
      </CollapsibleHeaderScrollView>
    </View>
  );
}
