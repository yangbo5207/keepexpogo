import React from 'react';
import { View, Text, useWindowDimensions } from 'react-native';

export default function ResponsiveLayout() {
  const { width } = useWindowDimensions();

  return (
    <View className="flex-1 gap-4 p-4">
      <Text className="text-xl font-bold text-gray-800 dark:text-gray-100">
        Responsive Layout
      </Text>

      <View className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
        <Text className="text-sm text-blue-800 dark:text-blue-200">
          当前屏幕宽度: {Math.round(width)}px
        </Text>
        <Text className="mt-1 text-xs text-blue-600 dark:text-blue-300">
          sm: 640px / md: 768px / lg: 1024px
        </Text>
      </View>

      {/* 响应式方向切换 */}
      <View>
        <Text className="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
          flex-col → md:flex-row
        </Text>
        <View className="flex-col gap-3 md:flex-row">
          <View className="flex-1 items-center rounded-lg bg-rose-100 p-4 dark:bg-rose-900/30">
            <Text className="font-semibold text-rose-700 dark:text-rose-300">Item A</Text>
          </View>
          <View className="flex-1 items-center rounded-lg bg-emerald-100 p-4 dark:bg-emerald-900/30">
            <Text className="font-semibold text-emerald-700 dark:text-emerald-300">Item B</Text>
          </View>
          <View className="flex-1 items-center rounded-lg bg-violet-100 p-4 dark:bg-violet-900/30">
            <Text className="font-semibold text-violet-700 dark:text-violet-300">Item C</Text>
          </View>
        </View>
      </View>

      {/* 响应式间距 */}
      <View>
        <Text className="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
          响应式间距与尺寸
        </Text>
        <View className="gap-2 sm:gap-4 md:gap-6">
          <View className="h-12 rounded-lg bg-sky-500 p-3 sm:h-16 md:h-20">
            <Text className="text-sm font-semibold text-white sm:text-base md:text-lg">
              高度随断点增长
            </Text>
          </View>
          <View className="flex-row gap-2">
            <View className="h-10 flex-1 items-center justify-center rounded-lg bg-amber-400">
              <Text className="text-xs font-bold text-amber-900">1/3</Text>
            </View>
            <View className="h-10 flex-1 items-center justify-center rounded-lg bg-amber-400">
              <Text className="text-xs font-bold text-amber-900">1/3</Text>
            </View>
            <View className="h-10 flex-1 items-center justify-center rounded-lg bg-amber-400">
              <Text className="text-xs font-bold text-amber-900">1/3</Text>
            </View>
          </View>
        </View>
      </View>

      {/* 响应式文字 */}
      <View>
        <Text className="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
          响应式文字大小
        </Text>
        <View className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
          <Text className="text-base font-bold text-gray-800 sm:text-lg md:text-2xl dark:text-gray-100">
            This text scales with screen size
          </Text>
          <Text className="mt-1 text-xs text-gray-500 sm:text-sm md:text-base dark:text-gray-400">
            text-base → sm:text-lg → md:text-2xl
          </Text>
        </View>
      </View>
    </View>
  );
}
