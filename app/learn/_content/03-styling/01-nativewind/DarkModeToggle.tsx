import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useColorScheme } from 'nativewind';

export default function DarkModeToggle() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View className="flex-1 gap-4 p-4">
      <Text className="text-xl font-bold text-gray-800 dark:text-gray-100">
        Dark Mode
      </Text>

      <View className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
        <Text className="text-sm text-blue-800 dark:text-blue-200">
          当前主题: {colorScheme === 'dark' ? '暗黑模式' : '浅色模式'}
        </Text>
      </View>

      {/* 切换按钮 */}
      <Pressable
        onPress={toggleColorScheme}
        className="items-center rounded-lg bg-gray-800 py-3 active:bg-gray-900 dark:bg-white dark:active:bg-gray-100"
      >
        <Text className="text-base font-semibold text-white dark:text-gray-800">
          {colorScheme === 'dark' ? '☀️ 切换到浅色模式' : '🌙 切换到暗黑模式'}
        </Text>
      </Pressable>

      {/* 效果展示卡片 */}
      <View className="gap-3">
        <View className="rounded-xl bg-white p-4 shadow-sm dark:bg-gray-800">
          <Text className="text-lg font-bold text-gray-800 dark:text-gray-100">
            Card Component
          </Text>
          <Text className="mt-1 text-sm text-gray-600 dark:text-gray-300">
            bg-white → dark:bg-gray-800
          </Text>
          <Text className="mt-1 text-sm text-gray-600 dark:text-gray-300">
            text-gray-800 → dark:text-gray-100
          </Text>
        </View>

        <View className="flex-row gap-3">
          <View className="flex-1 rounded-lg bg-blue-100 p-3 dark:bg-blue-900/40">
            <Text className="text-center font-semibold text-blue-700 dark:text-blue-300">
              Blue
            </Text>
          </View>
          <View className="flex-1 rounded-lg bg-green-100 p-3 dark:bg-green-900/40">
            <Text className="text-center font-semibold text-green-700 dark:text-green-300">
              Green
            </Text>
          </View>
          <View className="flex-1 rounded-lg bg-purple-100 p-3 dark:bg-purple-900/40">
            <Text className="text-center font-semibold text-purple-700 dark:text-purple-300">
              Purple
            </Text>
          </View>
        </View>

        <View className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
          <Text className="text-sm text-gray-600 dark:text-gray-300">
            使用 dark: 前缀为暗黑模式指定不同的样式值。NativeWind 在运行时通过 useColorScheme Hook 判断当前主题，自动切换对应样式。
          </Text>
        </View>
      </View>
    </View>
  );
}
