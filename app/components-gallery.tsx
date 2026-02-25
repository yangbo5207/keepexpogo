import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { IconSymbol } from '@/components/ui/icon-symbol';

interface ComponentItem {
  name: string;
  description: string;
  demo?: string;
}

const components: ComponentItem[] = [
  { name: 'Button', description: '基于 Reanimated 的主题按钮，支持多 variant / size', demo: '/component-demos/button' },
  { name: 'ThemedText', description: '支持主题切换的文本组件' },
  { name: 'ThemedView', description: '支持主题切换的视图容器' },
  { name: 'HelloWave', description: '带动画效果的挥手 emoji 组件' },
  { name: 'ParallaxScrollView', description: '带视差滚动头图的滚动视图' },
  { name: 'ExternalLink', description: '在浏览器中打开的外部链接组件' },
  { name: 'HapticTab', description: '带触觉反馈的 Tab 按钮' },
  { name: 'CategoryCard', description: '分类卡片，用于 Learn 页面的分类展示' },
  { name: 'DemoCloseButton', description: 'Demo 页面关闭按钮' },
  { name: 'DemoBackButton', description: 'Demo 页面返回按钮' },
  { name: 'Collapsible', description: '可折叠/展开的内容区域' },
  { name: 'IconSymbol', description: '跨平台图标组件（iOS SF Symbols / Material Icons）' },
];

export default function ComponentsGalleryScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-cream-50 dark:bg-night-800">
      <Stack.Screen options={{ title: '组件' }} />
      <FlatList
        data={components}
        keyExtractor={(item) => item.name}
        contentContainerClassName="p-4 pb-8"
        ItemSeparatorComponent={() => <View className="h-px bg-cream-300 dark:bg-night-500" />}
        renderItem={({ item }) =>
          item.demo ? (
            <TouchableOpacity
              className="flex-row items-center px-2 py-3"
              activeOpacity={0.6}
              onPress={() => router.push(item.demo as any)}
            >
              <View className="flex-1">
                <Text className="text-base font-semibold text-cream-900 dark:text-night-50">
                  {item.name}
                </Text>
                <Text className="mt-1 text-sm text-cream-600 dark:text-night-200">
                  {item.description}
                </Text>
              </View>
              <IconSymbol name="chevron.right" size={16} color="#B3A57E" />
            </TouchableOpacity>
          ) : (
            <View className="px-2 py-3">
              <Text className="text-base font-semibold text-cream-900 dark:text-night-50">
                {item.name}
              </Text>
              <Text className="mt-1 text-sm text-cream-600 dark:text-night-200">
                {item.description}
              </Text>
            </View>
          )
        }
      />
    </View>
  );
}
