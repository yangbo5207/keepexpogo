import React from 'react';
import { View, Text, ScrollView, useWindowDimensions } from 'react-native';

// ═══════════════════════════════════════════════════════════
//  断点判断
// ═══════════════════════════════════════════════════════════
function getBreakpoint(width: number) {
  if (width >= 1024) return 'lg';
  if (width >= 768) return 'md';
  if (width >= 640) return 'sm';
  return 'base';
}

// ═══════════════════════════════════════════════════════════
//  产品卡片
// ═══════════════════════════════════════════════════════════
const products = [
  { name: '智能手表', price: '¥1,299', color: 'bg-blue-100 dark:bg-blue-900/30', textColor: 'text-blue-700 dark:text-blue-300' },
  { name: '无线耳机', price: '¥899', color: 'bg-emerald-100 dark:bg-emerald-900/30', textColor: 'text-emerald-700 dark:text-emerald-300' },
  { name: '便携充电器', price: '¥199', color: 'bg-amber-100 dark:bg-amber-900/30', textColor: 'text-amber-700 dark:text-amber-300' },
  { name: '蓝牙音箱', price: '¥599', color: 'bg-rose-100 dark:bg-rose-900/30', textColor: 'text-rose-700 dark:text-rose-300' },
  { name: '机械键盘', price: '¥699', color: 'bg-violet-100 dark:bg-violet-900/30', textColor: 'text-violet-700 dark:text-violet-300' },
  { name: '平板支架', price: '¥129', color: 'bg-cyan-100 dark:bg-cyan-900/30', textColor: 'text-cyan-700 dark:text-cyan-300' },
];

// ═══════════════════════════════════════════════════════════
//  Demo
// ═══════════════════════════════════════════════════════════
export default function AdaptiveGrid() {
  const { width } = useWindowDimensions();
  const breakpoint = getBreakpoint(width);

  return (
    <ScrollView className="flex-1" contentContainerClassName="gap-6 p-4 pb-12">
      <Text className="text-xl font-bold text-gray-800 dark:text-gray-100">
        Adaptive Grid
      </Text>

      {/* ── 屏幕宽度指示器 ──────────────────── */}
      <View className="rounded-lg bg-indigo-50 p-3 dark:bg-indigo-900/20">
        <Text className="text-sm font-semibold text-indigo-800 dark:text-indigo-200">
          当前宽度: {Math.round(width)}px · 断点: {breakpoint}
        </Text>
        <Text className="mt-1 text-xs text-indigo-600 dark:text-indigo-300">
          手机 1 列 → md(768px) 2 列 → lg(1024px) 3 列
        </Text>
      </View>

      {/* ── 区块一：响应式多列网格 ──────────── */}
      <View className="gap-2">
        <Text className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          响应式网格：flex-wrap + 百分比宽度
        </Text>
        <Text className="text-xs text-gray-500 dark:text-gray-400">
          w-full → md:w-[48%] → lg:w-[31%]
        </Text>
      </View>

      <View className="flex-row flex-wrap gap-3">
        {products.map((item) => (
          <View
            key={item.name}
            className={`w-full rounded-xl p-4 md:w-[48%] lg:w-[31%] ${item.color}`}
          >
            <Text className={`text-base font-bold ${item.textColor}`}>
              {item.name}
            </Text>
            <Text className={`mt-1 text-sm ${item.textColor} opacity-80`}>
              {item.price}
            </Text>
          </View>
        ))}
      </View>

      {/* ── 区块二：侧边栏显隐 ────────────── */}
      <View className="gap-2">
        <Text className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          侧边栏模式：hidden md:flex
        </Text>
        <Text className="text-xs text-gray-500 dark:text-gray-400">
          手机隐藏侧边栏，平板以上显示
        </Text>
      </View>

      <View className="flex-row gap-3">
        {/* 侧边栏 — 手机隐藏 */}
        <View className="hidden rounded-xl bg-gray-100 p-4 dark:bg-gray-800 md:flex md:w-48">
          <Text className="mb-3 text-sm font-bold text-gray-700 dark:text-gray-300">
            侧边导航
          </Text>
          {['仪表盘', '用户管理', '订单列表', '系统设置'].map((item) => (
            <View
              key={item}
              className="border-b border-gray-200 py-2 dark:border-gray-700"
            >
              <Text className="text-sm text-gray-600 dark:text-gray-400">
                {item}
              </Text>
            </View>
          ))}
        </View>

        {/* 主内容区 */}
        <View className="flex-1 rounded-xl bg-white p-4 dark:bg-gray-800">
          <Text className="text-sm font-bold text-gray-700 dark:text-gray-300">
            主内容区域
          </Text>
          <Text className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            这里是主要内容。在 md 断点以上，左侧会出现侧边导航栏。手机上侧边栏自动隐藏，主内容占满全宽。
          </Text>
          <View className="mt-3 rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
            <Text className="text-xs text-blue-700 dark:text-blue-300">
              关键类名：侧边栏使用 hidden md:flex md:w-48，主内容使用 flex-1
            </Text>
          </View>
        </View>
      </View>

      {/* ── 区块三：响应式间距 ────────────── */}
      <View className="gap-2">
        <Text className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          响应式间距：gap 随断点变化
        </Text>
        <Text className="text-xs text-gray-500 dark:text-gray-400">
          gap-2 → md:gap-4 → lg:gap-6
        </Text>
      </View>

      <View className="flex-row flex-wrap gap-2 md:gap-4 lg:gap-6">
        {['A', 'B', 'C', 'D'].map((item) => (
          <View
            key={item}
            className="h-16 w-16 items-center justify-center rounded-lg bg-teal-100 dark:bg-teal-900/30 md:h-20 md:w-20 lg:h-24 lg:w-24"
          >
            <Text className="text-lg font-bold text-teal-700 dark:text-teal-300">
              {item}
            </Text>
          </View>
        ))}
      </View>

      {/* Note */}
      <View className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
        <Text className="text-xs text-blue-700 dark:text-blue-300">
          核心模式：RN 没有 CSS Grid，使用 flex-row flex-wrap + 百分比宽度模拟多列网格。配合
          hidden md:flex 实现侧边栏在不同断点的显隐。所有样式都是 Mobile-First：基础样式 =
          手机，断点递增覆盖。
        </Text>
      </View>
    </ScrollView>
  );
}
