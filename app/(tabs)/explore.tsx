import { Link, useRouter } from "expo-router";
import {
  ArrowRight,
  BookOpen,
  Compass,
  Layers,
  Palette,
} from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";

import { CollapsibleHeaderScrollView } from "@/components/ui/collapsible-header-scroll-view";
import { ListRow, ListRowGroup } from "@/components/ui/list-row";
import { useColorScheme } from "@/hooks/use-color-scheme";

const quickLinks = [
  {
    title: "组件演示",
    description: "进入组件画廊与交互示例",
    href: "/components-gallery" as const,
    icon: Layers,
  },
  {
    title: "动效集合",
    description: "Reanimated 动画 demo 快速入口",
    href: "/expo-demos/reanimated-basic" as const,
    icon: Compass,
  },
  {
    title: "学习中心",
    description: "阅读主题与实现细节",
    href: "/learn/1" as const,
    icon: BookOpen,
  },
];

export default function ExploreScreen() {
  const theme = useColorScheme() ?? "light";
  const router = useRouter();
  const iconColor = theme === "dark" ? "#e6d5ce" : "#6e4d38";
  const arrowColor = theme === "dark" ? "#9e978a" : "#b3a57e";

  return (
    <View className="flex-1 bg-cream-50 dark:bg-night-800">
      <CollapsibleHeaderScrollView
        title="主题与体验"
        subtitle="Explore"
        containerClassName="bg-cream-50 dark:bg-night-800"
        headerBackgroundClassName="bg-cream-100/95 dark:bg-night-700/95"
        className="px-5 pb-14"
      >
        <View className="my-8 rounded-2xl border border-cream-200 bg-cream-100 p-5 dark:border-night-600 dark:bg-night-700">
          <View className="flex-row items-center">
            <View className="mr-3 rounded-full bg-secondary-100 p-2 dark:bg-night-600">
              <Palette size={18} color={iconColor} />
            </View>
            <Text className="text-sm font-semibold uppercase tracking-widest text-cream-600 dark:text-night-200">
              设计要点
            </Text>
          </View>
          <Text className="mt-3 text-xl font-semibold text-cream-900 dark:text-night-50">
            低饱和、柔质感、轻动效
          </Text>
          <Text className="mt-2 text-sm leading-6 text-cream-700 dark:text-night-200">
            以温润的奶白为基底，通过轻微的阴影与弹簧动画营造克制的高级质感。
          </Text>
          <Link
            href="/learn/1"
            className="mt-4 self-start rounded-full border border-cream-300 bg-cream-200 px-4 py-2 dark:border-night-500 dark:bg-night-600"
          >
            <Text className="text-sm font-semibold text-cream-800 dark:text-night-50">
              阅读主题说明
            </Text>
          </Link>
        </View>

        <View className="mb-4">
          <Text className="text-xs font-semibold uppercase tracking-widest text-cream-600 dark:text-night-200">
            快速入口
          </Text>
          <View className="mt-4 gap-3">
            {quickLinks.map((item) => (
              <ListRow
                key={item.title}
                title={item.title}
                description={item.description}
                left={
                  <View className="rounded-full bg-secondary-100 p-2 dark:bg-night-600">
                    <item.icon size={18} color={iconColor} />
                  </View>
                }
                right={<ArrowRight size={18} color={arrowColor} />}
                onPress={() => router.push(item.href)}
                className="rounded-2xl border border-cream-200 dark:border-night-600"
              />
            ))}
          </View>
        </View>

        <View className="mt-6">
          <Text className="text-xs font-semibold uppercase tracking-widest text-cream-600 dark:text-night-200">
            推荐动作
          </Text>
          <ListRowGroup className="mt-4">
            <ListRow
              title="查看 Switch 交互"
              description="轻微弹簧切换与暗色适配"
              right={<ArrowRight size={18} color={arrowColor} />}
              onPress={() => router.push("/component-demos/switch")}
            />
            <ListRow
              title="体验 ListRow 细节"
              description="分组结构与按压渐变"
              right={<ArrowRight size={18} color={arrowColor} />}
              onPress={() => router.push("/components-gallery")}
            />
          </ListRowGroup>
        </View>
      </CollapsibleHeaderScrollView>
    </View>
  );
}
