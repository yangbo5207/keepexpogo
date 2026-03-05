import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useColorScheme } from 'nativewind';

export default function DarkModeToggle() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View className="flex-1 gap-4 p-4">
      <Text className="text-xl font-bold text-cream-900 dark:text-night-50">
        Dark Mode
      </Text>

      <View className="rounded-xs bg-blue-50 p-3 dark:bg-blue-900/20">
        <Text className="text-sm text-blue-800 dark:text-blue-200">
          当前主题: {colorScheme === 'dark' ? '暗黑模式' : '浅色模式'}
        </Text>
      </View>

      {/* 切换按钮 */}
      <Pressable
        onPress={toggleColorScheme}
        className="items-center rounded-xs bg-night-700 py-3 active:bg-night-900 dark:bg-cream-50 dark:active:bg-cream-100"
      >
        <Text className="text-base font-semibold text-cream-50 dark:text-cream-800">
          {colorScheme === 'dark' ? '☀️ 切换到浅色模式' : '🌙 切换到暗黑模式'}
        </Text>
      </Pressable>

      {/* 效果展示卡片 */}
      <View className="gap-3">
        <View className="rounded-xs bg-cream-50 p-4 shadow-sm dark:bg-night-700">
          <Text className="text-lg font-bold text-cream-900 dark:text-night-50">
            Card Component
          </Text>
          <Text className="mt-1 text-sm text-cream-600 dark:text-night-200">
            bg-cream-50 → dark:bg-night-700
          </Text>
          <Text className="mt-1 text-sm text-cream-600 dark:text-night-200">
            text-cream-800 → dark:text-night-50
          </Text>
        </View>

        <View className="flex-row gap-3">
          <View className="flex-1 rounded-xs bg-blue-100 p-3 dark:bg-blue-900/40">
            <Text className="text-center font-semibold text-blue-700 dark:text-blue-300">
              Blue
            </Text>
          </View>
          <View className="flex-1 rounded-xs bg-green-100 p-3 dark:bg-green-900/40">
            <Text className="text-center font-semibold text-green-700 dark:text-green-300">
              Green
            </Text>
          </View>
          <View className="flex-1 rounded-xs bg-purple-100 p-3 dark:bg-purple-900/40">
            <Text className="text-center font-semibold text-purple-700 dark:text-purple-300">
              Purple
            </Text>
          </View>
        </View>

        <View className="rounded-xs border border-cream-200 p-4 dark:border-night-600">
          <Text className="text-sm text-cream-600 dark:text-night-200">
            使用 dark: 前缀为暗黑模式指定不同的样式值。NativeWind 在运行时通过 useColorScheme Hook 判断当前主题，自动切换对应样式。
          </Text>
        </View>
      </View>
    </View>
  );
}
