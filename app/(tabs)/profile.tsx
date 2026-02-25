import { useRouter } from "expo-router";
import {
  ChevronRight,
  LayoutGrid,
  Settings,
  Shield,
} from "lucide-react-native";
import { useColorScheme } from "nativewind";
import React from "react";
import { Text, View } from "react-native";

import { Card } from "@/components/ui/card";
import { CollapsibleHeaderScrollView } from "@/components/ui/collapsible-header-scroll-view";
import { ListRow, ListRowGroup } from "@/components/ui/list-row";
import { Switch } from "@/components/ui/switch";

const menuItems = [
  {
    label: "设置",
    icon: Settings,
    route: "/settings" as const,
  },
  {
    label: "组件",
    icon: LayoutGrid,
    route: "/components-gallery" as const,
  },
];

export default function ProfileScreen() {
  const router = useRouter();
  const { colorScheme, setColorScheme } = useColorScheme();
  const isDark = (colorScheme ?? "light") === "dark";
  const iconColor = isDark ? "#9e978a" : "#b3a57e";
  const accentColor = isDark ? "#e6d5ce" : "#6e4d38";

  return (
    <View className="flex-1 bg-cream-50 dark:bg-night-800">
      <CollapsibleHeaderScrollView
        title="个人设置"
        subtitle="Profile"
        containerClassName="bg-cream-50 dark:bg-night-800"
        headerBackgroundClassName="bg-cream-100/95 dark:bg-night-700/95"
        className="px-5 pb-10"
      >
        <Card className="my-8">
          <Card.Header>
            <Card.Icon>
              <Shield size={16} color={accentColor} />
            </Card.Icon>
            <Card.Eyebrow>外观</Card.Eyebrow>
          </Card.Header>
          <Card.Title>暗黑模式</Card.Title>
          <Card.Description>手动切换主题外观，适配夜间阅读。</Card.Description>
          <View className="mt-4 flex-row items-center justify-between">
            <Text className="text-sm font-semibold text-cream-800 dark:text-night-100">
              当前模式
            </Text>
            <Switch
              value={isDark}
              onValueChange={(next) => setColorScheme(next ? "dark" : "light")}
            />
          </View>
        </Card>

        <Text className="text-xs font-semibold uppercase tracking-widest text-cream-600 dark:text-night-200">
          导航入口
        </Text>
        <ListRowGroup className="mt-4">
          {menuItems.map((item) => (
            <ListRow
              key={item.label}
              title={item.label}
              left={<item.icon size={18} color={iconColor} />}
              right={<ChevronRight size={18} color={iconColor} />}
              onPress={() => router.push(item.route)}
            />
          ))}
        </ListRowGroup>
      </CollapsibleHeaderScrollView>
    </View>
  );
}
