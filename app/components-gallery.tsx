import { Stack, useRouter } from "expo-router";
import { ChevronRight, Grid2X2 } from "lucide-react-native";
import { Text, View } from "react-native";

import { Card } from "@/components/ui/card";
import { ListRow, ListRowGroup } from "@/components/ui/list-row";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface ComponentItem {
  name: string;
  description: string;
  demo?: string;
}

const components: ComponentItem[] = [
  {
    name: "Button",
    description: "基于 Reanimated 的主题按钮，支持多 variant / size",
    demo: "/component-demos/button",
  },
  {
    name: "Switch",
    description: "支持 spring 动画与暗色模式的开关组件",
    demo: "/component-demos/switch",
  },
  { name: "ThemedText", description: "支持主题切换的文本组件" },
  { name: "ThemedView", description: "支持主题切换的视图容器" },
  { name: "HelloWave", description: "带动画效果的挥手 emoji 组件" },
  { name: "ParallaxScrollView", description: "带视差滚动头图的滚动视图" },
  { name: "ExternalLink", description: "在浏览器中打开的外部链接组件" },
  { name: "HapticTab", description: "带触觉反馈的 Tab 按钮" },
  { name: "CategoryCard", description: "分类卡片，用于 Learn 页面的分类展示" },
  { name: "DemoCloseButton", description: "Demo 页面关闭按钮" },
  { name: "DemoBackButton", description: "Demo 页面返回按钮" },
  { name: "Collapsible", description: "可折叠/展开的内容区域" },
  {
    name: "IconSymbol",
    description: "跨平台图标组件（iOS SF Symbols / Material Icons）",
  },
];

export default function ComponentsGalleryScreen() {
  const router = useRouter();
  const theme = useColorScheme() ?? "light";
  const arrowColor = theme === "dark" ? "#9e978a" : "#b3a57e";
  const iconColor = theme === "dark" ? "#e6d5ce" : "#6e4d38";
  const insets = useSafeAreaInsets();
  return (
    <ScrollView
      contentContainerClassName="p-4"
      className="flex-1 bg-cream-50 dark:bg-night-800"
    >
      <Stack.Screen options={{ title: "组件" }} />
      <Card className="mb-6">
        <Card.Header>
          <Card.Icon>
            <Grid2X2 size={18} color={iconColor} />
          </Card.Icon>
          <Card.Eyebrow>组件目录</Card.Eyebrow>
        </Card.Header>
        <Card.Title>交互与视觉组件</Card.Title>
        <Card.Description>
          浏览当前项目内的 UI 组件与演示入口，保持统一的主题与动效标准。
        </Card.Description>
      </Card>

      <Text className="text-xs font-semibold uppercase tracking-widest text-cream-600 dark:text-night-200">
        列表
      </Text>
      <ListRowGroup className="mt-4">
        {components.map((item) => (
          <ListRow
            key={item.name}
            title={item.name}
            description={item.description}
            right={
              item.demo ? (
                <ChevronRight size={18} color={arrowColor} />
              ) : undefined
            }
            onPress={
              item.demo ? () => router.push(item.demo as any) : undefined
            }
          />
        ))}
      </ListRowGroup>
      <View style={{ height: insets.bottom }} />
    </ScrollView>
  );
}
