import React from 'react';
import { View, Text, ScrollView, useWindowDimensions } from 'react-native';

// ═══════════════════════════════════════════════════════════
//  useBreakpoint Hook
// ═══════════════════════════════════════════════════════════
type Breakpoint = 'base' | 'sm' | 'md' | 'lg';

function useBreakpoint(): {
  breakpoint: Breakpoint;
  width: number;
  height: number;
  isLandscape: boolean;
} {
  const { width, height } = useWindowDimensions();

  let breakpoint: Breakpoint = 'base';
  if (width >= 1024) breakpoint = 'lg';
  else if (width >= 768) breakpoint = 'md';
  else if (width >= 640) breakpoint = 'sm';

  return { breakpoint, width, height, isLandscape: width > height };
}

// ═══════════════════════════════════════════════════════════
//  用户卡片数据
// ═══════════════════════════════════════════════════════════
const users = [
  {
    name: '张三',
    role: '前端工程师',
    bio: '专注于 React Native 跨平台开发，擅长组件库设计与性能优化。',
    stats: { projects: 12, followers: 340, stars: 89 },
  },
  {
    name: 'Li Si',
    role: '后端开发者',
    bio: '擅长分布式系统设计，目前主要使用 Go 和 Rust 进行微服务开发。',
    stats: { projects: 8, followers: 210, stars: 56 },
  },
  {
    name: '王五',
    role: 'UI 设计师',
    bio: '关注用户体验与设计系统，为多个 App 构建了完整的设计规范。',
    stats: { projects: 15, followers: 520, stars: 132 },
  },
];

// ═══════════════════════════════════════════════════════════
//  紧凑版用户卡片（手机）
// ═══════════════════════════════════════════════════════════
function CompactUserCard({ user }: { user: (typeof users)[0] }) {
  const initials = user.name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <View className="flex-row items-center gap-3 rounded-xl bg-white p-3 dark:bg-gray-800">
      <View className="h-10 w-10 items-center justify-center rounded-full bg-blue-500">
        <Text className="text-sm font-bold text-white">{initials}</Text>
      </View>
      <View className="flex-1">
        <Text className="text-sm font-semibold text-gray-800 dark:text-gray-100">
          {user.name}
        </Text>
        <Text className="text-xs text-gray-500 dark:text-gray-400">
          {user.role}
        </Text>
      </View>
    </View>
  );
}

// ═══════════════════════════════════════════════════════════
//  展开版用户卡片（平板）
// ═══════════════════════════════════════════════════════════
function ExpandedUserCard({ user }: { user: (typeof users)[0] }) {
  const initials = user.name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <View className="rounded-xl bg-white p-4 dark:bg-gray-800">
      <View className="flex-row items-center gap-3">
        <View className="h-14 w-14 items-center justify-center rounded-full bg-blue-500">
          <Text className="text-lg font-bold text-white">{initials}</Text>
        </View>
        <View className="flex-1">
          <Text className="text-base font-bold text-gray-800 dark:text-gray-100">
            {user.name}
          </Text>
          <Text className="text-sm text-gray-500 dark:text-gray-400">
            {user.role}
          </Text>
        </View>
      </View>
      <Text className="mt-3 text-sm text-gray-600 dark:text-gray-400">
        {user.bio}
      </Text>
      <View className="mt-3 flex-row gap-4">
        <View className="items-center">
          <Text className="text-base font-bold text-gray-800 dark:text-gray-100">
            {user.stats.projects}
          </Text>
          <Text className="text-xs text-gray-500 dark:text-gray-400">
            项目
          </Text>
        </View>
        <View className="items-center">
          <Text className="text-base font-bold text-gray-800 dark:text-gray-100">
            {user.stats.followers}
          </Text>
          <Text className="text-xs text-gray-500 dark:text-gray-400">
            关注者
          </Text>
        </View>
        <View className="items-center">
          <Text className="text-base font-bold text-gray-800 dark:text-gray-100">
            {user.stats.stars}
          </Text>
          <Text className="text-xs text-gray-500 dark:text-gray-400">
            获赞
          </Text>
        </View>
      </View>
    </View>
  );
}

// ═══════════════════════════════════════════════════════════
//  Demo
// ═══════════════════════════════════════════════════════════
export default function ConditionalRender() {
  const { breakpoint, width, height, isLandscape } = useBreakpoint();
  const isMobile = breakpoint === 'base' || breakpoint === 'sm';

  return (
    <ScrollView className="flex-1" contentContainerClassName="gap-6 p-4 pb-12">
      <Text className="text-xl font-bold text-gray-800 dark:text-gray-100">
        Conditional Render
      </Text>

      {/* ── 区块一：断点 + 屏幕信息 ────────── */}
      <View className="rounded-lg bg-violet-50 p-3 dark:bg-violet-900/20">
        <Text className="text-sm font-semibold text-violet-800 dark:text-violet-200">
          useBreakpoint() 返回值
        </Text>
        <View className="mt-2 gap-1">
          <Text className="text-xs text-violet-700 dark:text-violet-300">
            breakpoint: {breakpoint}
          </Text>
          <Text className="text-xs text-violet-700 dark:text-violet-300">
            width: {Math.round(width)}px · height: {Math.round(height)}px
          </Text>
          <Text className="text-xs text-violet-700 dark:text-violet-300">
            方向: {isLandscape ? '横屏 (Landscape)' : '竖屏 (Portrait)'}
          </Text>
        </View>
      </View>

      {/* ── 区块二：条件渲染用户卡片 ──────── */}
      <View className="gap-2">
        <Text className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          JS 条件渲染：手机紧凑版 vs 平板展开版
        </Text>
        <Text className="text-xs text-gray-500 dark:text-gray-400">
          {isMobile
            ? '当前: 紧凑版（头像 + 名字）'
            : '当前: 展开版（头像 + 名字 + 简介 + 统计）'}
        </Text>
      </View>

      <View className="gap-3">
        {users.map((user) =>
          isMobile ? (
            <CompactUserCard key={user.name} user={user} />
          ) : (
            <ExpandedUserCard key={user.name} user={user} />
          ),
        )}
      </View>

      {/* ── 区块三：横屏检测布局切换 ────────── */}
      <View className="gap-2">
        <Text className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          横屏检测：横屏水平排列 / 竖屏垂直堆叠
        </Text>
        <Text className="text-xs text-gray-500 dark:text-gray-400">
          isLandscape = width {'>'} height → {isLandscape ? 'true' : 'false'}
        </Text>
      </View>

      <View
        className={`gap-3 ${isLandscape ? 'flex-row' : 'flex-col'}`}
      >
        {[
          { label: '收入', value: '¥12,450', bg: 'bg-emerald-100 dark:bg-emerald-900/30', text: 'text-emerald-700 dark:text-emerald-300' },
          { label: '支出', value: '¥8,320', bg: 'bg-rose-100 dark:bg-rose-900/30', text: 'text-rose-700 dark:text-rose-300' },
          { label: '余额', value: '¥4,130', bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-700 dark:text-blue-300' },
        ].map((item) => (
          <View
            key={item.label}
            className={`flex-1 rounded-xl p-4 ${item.bg}`}
          >
            <Text className={`text-xs ${item.text} opacity-80`}>
              {item.label}
            </Text>
            <Text className={`mt-1 text-lg font-bold ${item.text}`}>
              {item.value}
            </Text>
          </View>
        ))}
      </View>

      {/* ── 决策指南 ─────────────────────── */}
      <View className="gap-2">
        <Text className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          className 断点 vs JS 条件渲染
        </Text>
      </View>

      <View className="rounded-xl bg-gray-100 p-4 dark:bg-gray-800">
        <View className="gap-2">
          <View className="flex-row gap-2">
            <Text className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
              className:
            </Text>
            <Text className="flex-1 text-xs text-gray-600 dark:text-gray-400">
              修改同一组件的样式（间距、尺寸、显隐）
            </Text>
          </View>
          <View className="flex-row gap-2">
            <Text className="text-xs font-bold text-blue-600 dark:text-blue-400">
              JS 渲染:
            </Text>
            <Text className="flex-1 text-xs text-gray-600 dark:text-gray-400">
              按断点渲染完全不同的组件结构
            </Text>
          </View>
          <View className="flex-row gap-2">
            <Text className="text-xs font-bold text-amber-600 dark:text-amber-400">
              横屏检测:
            </Text>
            <Text className="flex-1 text-xs text-gray-600 dark:text-gray-400">
              需要 JS — className 断点只看宽度，不看方向
            </Text>
          </View>
        </View>
      </View>

      {/* Note */}
      <View className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
        <Text className="text-xs text-blue-700 dark:text-blue-300">
          useBreakpoint() 基于 useWindowDimensions，当窗口尺寸变化时自动更新。适用于需要按断点渲染不同组件结构的场景，而非仅仅改变样式。对于纯样式变化，优先使用
          NativeWind 的 md:/lg: 断点前缀。
        </Text>
      </View>
    </ScrollView>
  );
}
