import React, { useState } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';

export default function TransitionAnimation() {
  const [isActive, setIsActive] = useState(false);

  return (
    <ScrollView className="flex-1" contentContainerClassName="gap-6 p-4 pb-12">
      <Text className="text-xl font-bold text-gray-800 dark:text-gray-100">
        CSS 过渡与动画
      </Text>

      {/* Transition: Color */}
      <View className="gap-2">
        <Text className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          颜色过渡（transition-colors）
        </Text>
        <Text className="text-xs text-gray-500 dark:text-gray-400">
          按住按钮，背景色平滑过渡
        </Text>
        <Pressable className="items-center rounded-lg bg-blue-500 py-3 transition-colors duration-300 active:bg-red-500">
          <Text className="text-base font-semibold text-white">
            按住我 → 颜色过渡
          </Text>
        </Pressable>
      </View>

      {/* Transition: All */}
      <View className="gap-2">
        <Text className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          综合过渡（transition-all）
        </Text>
        <Text className="text-xs text-gray-500 dark:text-gray-400">
          按住按钮，背景色 + 圆角同时过渡
        </Text>
        <Pressable className="items-center rounded-lg bg-emerald-500 py-3 transition-all duration-500 active:rounded-full active:bg-amber-500">
          <Text className="text-base font-semibold text-white">
            按住我 → 多属性过渡
          </Text>
        </Pressable>
      </View>

      {/* Toggle transition */}
      <View className="gap-2">
        <Text className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          状态切换过渡
        </Text>
        <Pressable
          onPress={() => setIsActive(!isActive)}
          className="items-center rounded-lg bg-gray-200 py-2 dark:bg-gray-700"
        >
          <Text className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            点击切换状态：{isActive ? 'ON' : 'OFF'}
          </Text>
        </Pressable>
        <View
          className={`items-center rounded-lg py-4 transition-all duration-500 ${
            isActive ? 'bg-purple-500 opacity-100' : 'bg-gray-300 opacity-50'
          }`}
        >
          <Text
            className={`text-sm font-semibold transition-colors duration-500 ${
              isActive ? 'text-white' : 'text-gray-600'
            }`}
          >
            {isActive ? '已激活' : '未激活'}
          </Text>
        </View>
      </View>

      {/* Built-in Animations */}
      <View className="gap-2">
        <Text className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          内置关键帧动画
        </Text>
      </View>

      {/* animate-spin */}
      <View className="flex-row items-center gap-4">
        <View className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
        <View>
          <Text className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            animate-spin
          </Text>
          <Text className="text-xs text-gray-500 dark:text-gray-400">
            加载指示器
          </Text>
        </View>
      </View>

      {/* animate-pulse */}
      <View className="flex-row items-center gap-4">
        <View className="gap-2">
          <View className="h-3 w-32 animate-pulse rounded-xs bg-gray-300 dark:bg-gray-600" />
          <View className="h-3 w-24 animate-pulse rounded-xs bg-gray-300 dark:bg-gray-600" />
          <View className="h-3 w-28 animate-pulse rounded-xs bg-gray-300 dark:bg-gray-600" />
        </View>
        <View>
          <Text className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            animate-pulse
          </Text>
          <Text className="text-xs text-gray-500 dark:text-gray-400">
            骨架屏效果
          </Text>
        </View>
      </View>

      {/* animate-bounce */}
      <View className="flex-row items-center gap-4">
        <Text className="animate-bounce text-2xl">↓</Text>
        <View>
          <Text className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            animate-bounce
          </Text>
          <Text className="text-xs text-gray-500 dark:text-gray-400">
            引导提示箭头
          </Text>
        </View>
      </View>

      {/* animate-ping */}
      <View className="flex-row items-center gap-4">
        <View className="relative h-8 w-8 items-center justify-center">
          <View className="absolute h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
          <View className="h-4 w-4 rounded-full bg-green-500" />
        </View>
        <View>
          <Text className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            animate-ping
          </Text>
          <Text className="text-xs text-gray-500 dark:text-gray-400">
            在线状态脉冲
          </Text>
        </View>
      </View>

      {/* Note */}
      <View className="rounded-lg bg-amber-50 p-3 dark:bg-amber-900/20">
        <Text className="text-xs text-amber-800 dark:text-amber-200">
          注意：动画功能依赖 react-native-reanimated，属于 NativeWind
          的实验性特性。确保项目中已安装并正确配置 reanimated。
        </Text>
      </View>
    </ScrollView>
  );
}
