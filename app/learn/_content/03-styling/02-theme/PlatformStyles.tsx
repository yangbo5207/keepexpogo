import React from 'react';
import { View, Text, ScrollView, Platform } from 'react-native';

export default function PlatformStyles() {
  const currentPlatform = Platform.OS;

  return (
    <ScrollView className="flex-1" contentContainerClassName="gap-6 p-4 pb-12">
      <Text className="text-xl font-bold text-cream-900 dark:text-night-50">
        Platform Styles
      </Text>

      <Text className="text-sm text-cream-600 dark:text-night-300">
        使用 ios: / android: / web: 变体前缀为不同平台指定样式
      </Text>

      {/* Platform Detection */}
      <View className="gap-2">
        <Text className="text-sm font-semibold text-cream-700 dark:text-night-200">
          平台检测
        </Text>
        <View className="rounded-card ios:bg-blue-50 android:bg-green-50 web:bg-purple-50 p-4 dark:ios:bg-blue-900/20 dark:android:bg-green-900/20 dark:web:bg-purple-900/20">
          <Text className="text-base font-semibold ios:text-blue-700 android:text-green-700 web:text-purple-700 dark:ios:text-blue-300 dark:android:text-green-300 dark:web:text-purple-300">
            当前平台: {currentPlatform}
          </Text>
          <Text className="mt-1 text-sm ios:text-blue-600 android:text-green-600 web:text-purple-600 dark:ios:text-blue-400 dark:android:text-green-400 dark:web:text-purple-400">
            {currentPlatform === 'ios' && 'ios:bg-blue-50 生效'}
            {currentPlatform === 'android' && 'android:bg-green-50 生效'}
            {currentPlatform === 'web' && 'web:bg-purple-50 生效'}
          </Text>
        </View>
      </View>

      {/* Shadow Comparison */}
      <View className="gap-2">
        <Text className="text-sm font-semibold text-cream-700 dark:text-night-200">
          阴影差异
        </Text>
        <View className="flex-row gap-3">
          <View className="flex-1 items-center rounded-card bg-cream-50 p-4 ios:shadow-sm android:elevation-2 dark:bg-night-700">
            <Text className="text-sm font-semibold text-cream-700 dark:text-night-200">
              轻阴影
            </Text>
            <Text className="mt-1 text-xs text-cream-600 dark:text-night-300">
              ios:shadow-sm{'\n'}android:elevation-2
            </Text>
          </View>
          <View className="flex-1 items-center rounded-card bg-cream-50 p-4 ios:shadow-lg android:elevation-5 dark:bg-night-700">
            <Text className="text-sm font-semibold text-cream-700 dark:text-night-200">
              重阴影
            </Text>
            <Text className="mt-1 text-xs text-cream-600 dark:text-night-300">
              ios:shadow-lg{'\n'}android:elevation-5
            </Text>
          </View>
        </View>
      </View>

      {/* Border Radius Difference */}
      <View className="gap-2">
        <Text className="text-sm font-semibold text-cream-700 dark:text-night-200">
          圆角差异
        </Text>
        <View className="flex-row gap-3">
          <View className="flex-1 items-center bg-primary-500 p-4 ios:rounded-xs android:rounded-xs">
            <Text className="text-sm font-semibold text-cream-50">
              iOS 大圆角
            </Text>
            <Text className="mt-1 text-xs text-primary-100">
              ios:rounded-xs
            </Text>
          </View>
          <View className="flex-1 items-center bg-success-500 p-4 ios:rounded-xs android:rounded-xs">
            <Text className="text-sm font-semibold text-cream-50">
              Android 小圆角
            </Text>
            <Text className="mt-1 text-xs text-success-100">
              android:rounded-xs
            </Text>
          </View>
        </View>
      </View>

      {/* Spacing Difference */}
      <View className="gap-2">
        <Text className="text-sm font-semibold text-cream-700 dark:text-night-200">
          间距差异
        </Text>
        <View className="rounded-card bg-secondary-50 ios:p-5 android:p-4 dark:bg-secondary-900/20">
          <Text className="text-sm font-semibold text-secondary-700 dark:text-secondary-300">
            平台适配间距
          </Text>
          <Text className="mt-1 text-xs text-secondary-600 dark:text-secondary-400">
            iOS 通常需要更大的间距（ios:p-5），Android 间距偏紧凑（android:p-4）
          </Text>
        </View>
      </View>

      {/* Font Weight Difference */}
      <View className="gap-2">
        <Text className="text-sm font-semibold text-cream-700 dark:text-night-200">
          字重差异
        </Text>
        <View className="flex-row gap-3">
          <View className="flex-1 items-center rounded-card bg-cream-50 p-4 dark:bg-night-700">
            <Text className="text-base ios:font-semibold android:font-bold text-cream-900 dark:text-night-50">
              标题文字
            </Text>
            <Text className="mt-1 text-xs text-cream-600 dark:text-night-300">
              ios:font-semibold{'\n'}android:font-bold
            </Text>
          </View>
          <View className="flex-1 items-center rounded-card bg-cream-50 p-4 dark:bg-night-700">
            <Text className="text-base ios:font-medium android:font-semibold text-cream-900 dark:text-night-50">
              正文文字
            </Text>
            <Text className="mt-1 text-xs text-cream-600 dark:text-night-300">
              ios:font-medium{'\n'}android:font-semibold
            </Text>
          </View>
        </View>
      </View>

      {/* native: variant */}
      <View className="gap-2">
        <Text className="text-sm font-semibold text-cream-700 dark:text-night-200">
          native: 变体
        </Text>
        <View className="rounded-card bg-warning-50 native:border native:border-warning-200 p-4 dark:bg-warning-900/20 dark:native:border-warning-800">
          <Text className="text-sm font-semibold text-warning-800 dark:text-warning-200">
            native: 同时匹配 iOS 和 Android
          </Text>
          <Text className="mt-1 text-xs text-warning-700 dark:text-warning-300">
            native:border native:border-warning-200 —— 仅在原生端显示边框，Web 端不显示
          </Text>
        </View>
      </View>

      {/* Explanation */}
      <View className="rounded-xs bg-cream-50 p-4 dark:bg-night-700/50">
        <Text className="text-sm font-semibold text-cream-700 dark:text-night-200">
          实现原理
        </Text>
        <Text className="mt-1 text-xs text-cream-600 dark:text-night-300">
          NativeWind 使用 Tailwind CSS 的 @custom-variant 指令注册平台变体。在构建时，它会检测目标平台并只输出对应平台的样式规则，无需运行时判断，零性能开销。
        </Text>
      </View>
    </ScrollView>
  );
}
