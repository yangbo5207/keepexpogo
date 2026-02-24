import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  useWindowDimensions,
} from 'react-native';

// ═══════════════════════════════════════════════════════════
//  useBreakpoint Hook
// ═══════════════════════════════════════════════════════════
type Breakpoint = 'base' | 'sm' | 'md' | 'lg';

function useBreakpoint(): { breakpoint: Breakpoint; width: number } {
  const { width } = useWindowDimensions();
  let breakpoint: Breakpoint = 'base';
  if (width >= 1024) breakpoint = 'lg';
  else if (width >= 768) breakpoint = 'md';
  else if (width >= 640) breakpoint = 'sm';
  return { breakpoint, width };
}

// ═══════════════════════════════════════════════════════════
//  统计数据
// ═══════════════════════════════════════════════════════════
const stats = [
  { label: '总用户', value: '2,847', change: '+12%', color: 'bg-blue-100 dark:bg-blue-900/30', textColor: 'text-blue-700 dark:text-blue-300' },
  { label: '活跃订单', value: '156', change: '+5%', color: 'bg-emerald-100 dark:bg-emerald-900/30', textColor: 'text-emerald-700 dark:text-emerald-300' },
  { label: '今日收入', value: '¥18.5K', change: '+8%', color: 'bg-amber-100 dark:bg-amber-900/30', textColor: 'text-amber-700 dark:text-amber-300' },
  { label: '转化率', value: '3.2%', change: '-0.4%', color: 'bg-rose-100 dark:bg-rose-900/30', textColor: 'text-rose-700 dark:text-rose-300' },
];

const navLinks = ['仪表盘', '用户', '订单', '设置'];

const sidebarItems = [
  { label: '数据概览', active: true },
  { label: '用户分析', active: false },
  { label: '收入报表', active: false },
  { label: '系统日志', active: false },
  { label: '通知中心', active: false },
];

// ═══════════════════════════════════════════════════════════
//  Demo
// ═══════════════════════════════════════════════════════════
export default function ResponsivePage() {
  const { breakpoint } = useBreakpoint();
  const isMobile = breakpoint === 'base' || breakpoint === 'sm';
  const [menuOpen, setMenuOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <ScrollView className="flex-1" contentContainerClassName="gap-6 pb-12">
      <Text className="px-4 pt-4 text-xl font-bold text-gray-800 dark:text-gray-100">
        Responsive Dashboard
      </Text>

      {/* ── 顶部导航栏 ─────────────────── */}
      <View className="flex-row items-center justify-between bg-white px-4 py-3 dark:bg-gray-800">
        <View className="flex-row items-center gap-3">
          <Text className="text-lg font-bold text-blue-600 dark:text-blue-400">
            Dashboard
          </Text>
          {/* 手机：菜单按钮 */}
          {isMobile && (
            <Pressable
              onPress={() => setMenuOpen(!menuOpen)}
              className="rounded-md bg-gray-100 px-2 py-1 active:bg-gray-200 dark:bg-gray-700"
            >
              <Text className="text-sm text-gray-700 dark:text-gray-300">
                {menuOpen ? '✕' : '☰'}
              </Text>
            </Pressable>
          )}
        </View>

        {/* 平板以上：完整导航链接 */}
        <View className="hidden flex-row gap-4 md:flex">
          {navLinks.map((link) => (
            <Pressable key={link} className="active:opacity-70">
              <Text className="text-sm text-gray-600 dark:text-gray-400">
                {link}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      {/* 手机菜单展开 */}
      {isMobile && menuOpen && (
        <View className="-mt-6 gap-1 bg-white px-4 pb-3 dark:bg-gray-800">
          {navLinks.map((link) => (
            <Pressable
              key={link}
              className="rounded-lg px-3 py-2 active:bg-gray-100 dark:active:bg-gray-700"
            >
              <Text className="text-sm text-gray-700 dark:text-gray-300">
                {link}
              </Text>
            </Pressable>
          ))}
        </View>
      )}

      {/* ── 统计卡片网格 ───────────────── */}
      <View className="gap-2 px-4">
        <Text className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          统计卡片
        </Text>
        <Text className="text-xs text-gray-500 dark:text-gray-400">
          手机 2 列(w-[48%]) → 平板 4 列(md:w-[23%])
        </Text>
      </View>

      <View className="flex-row flex-wrap gap-3 px-4">
        {stats.map((stat) => (
          <View
            key={stat.label}
            className={`w-[48%] rounded-xl p-3 md:w-[23%] ${stat.color}`}
          >
            <Text className={`text-xs ${stat.textColor} opacity-80`}>
              {stat.label}
            </Text>
            <Text className={`mt-1 text-xl font-bold ${stat.textColor}`}>
              {stat.value}
            </Text>
            <Text className={`mt-0.5 text-xs ${stat.textColor} opacity-60`}>
              {stat.change}
            </Text>
          </View>
        ))}
      </View>

      {/* ── 侧边栏 + 内容区 ──────────── */}
      <View className="gap-2 px-4">
        <Text className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          侧边栏 + 内容
        </Text>
        <Text className="text-xs text-gray-500 dark:text-gray-400">
          手机隐藏侧边栏 → md: 显示
        </Text>
      </View>

      <View className="flex-row gap-3 px-4">
        {/* 侧边栏 */}
        <View className="hidden rounded-xl bg-white p-3 dark:bg-gray-800 md:flex md:w-44">
          <Text className="mb-2 text-xs font-bold text-gray-500 dark:text-gray-400">
            导航菜单
          </Text>
          {sidebarItems.map((item) => (
            <Pressable
              key={item.label}
              className={`rounded-lg px-3 py-2 ${
                item.active
                  ? 'bg-blue-50 dark:bg-blue-900/30'
                  : 'active:bg-gray-50 dark:active:bg-gray-700'
              }`}
            >
              <Text
                className={`text-sm ${
                  item.active
                    ? 'font-semibold text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                {item.label}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* 主内容 */}
        <View className="flex-1 gap-3 rounded-xl bg-white p-4 dark:bg-gray-800">
          <Text className="text-sm font-bold text-gray-800 dark:text-gray-100">
            数据概览
          </Text>

          {/* 模拟图表占位 */}
          <View className="h-32 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
            <Text className="text-sm text-gray-400 dark:text-gray-500">
              图表区域
            </Text>
            <Text className="mt-1 text-xs text-gray-400 dark:text-gray-500">
              (此处可放置 Victory / react-native-chart-kit)
            </Text>
          </View>

          {/* 最近活动 */}
          <Text className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            最近活动
          </Text>
          {[
            { action: '新用户注册', time: '2 分钟前' },
            { action: '订单 #1024 已发货', time: '15 分钟前' },
            { action: '系统更新完成', time: '1 小时前' },
          ].map((activity) => (
            <View
              key={activity.action}
              className="flex-row items-center justify-between border-b border-gray-100 py-2 dark:border-gray-700"
            >
              <Text className="text-xs text-gray-600 dark:text-gray-400">
                {activity.action}
              </Text>
              <Text className="text-xs text-gray-400 dark:text-gray-500">
                {activity.time}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* ── 底部表单（KeyboardAvoidingView 演示）──── */}
      <View className="gap-2 px-4">
        <Text className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          键盘规避表单
        </Text>
        <Text className="text-xs text-gray-500 dark:text-gray-400">
          KeyboardAvoidingView 包裹输入区域，聚焦输入时自动避让键盘
        </Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View className="mx-4 gap-3 rounded-xl bg-white p-4 dark:bg-gray-800">
          <Text className="text-sm font-semibold text-gray-800 dark:text-gray-100">
            发送消息
          </Text>
          <TextInput
            className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-800 focus:border-blue-500 dark:border-gray-600 dark:text-gray-200 dark:focus:border-blue-400"
            placeholder="输入消息内容..."
            placeholderTextColor="#9ca3af"
            value={message}
            onChangeText={setMessage}
            multiline
          />
          <Pressable className="items-center rounded-lg bg-blue-500 py-2.5 active:bg-blue-700 dark:bg-blue-600">
            <Text className="text-sm font-semibold text-white">发送</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>

      {/* ── SafeArea 说明 ──────────────── */}
      <View className="mx-4 rounded-lg bg-amber-50 p-3 dark:bg-amber-900/20">
        <Text className="text-xs font-semibold text-amber-700 dark:text-amber-300">
          SafeAreaView 说明
        </Text>
        <Text className="mt-1 text-xs text-amber-600 dark:text-amber-300">
          实际项目中，SafeAreaView 应包裹在页面最外层（而非 Demo 内部），配合 edges
          属性控制哪些边需要安全区域处理。本 Demo 的宿主 App 已在外层处理了安全区域。
        </Text>
      </View>

      {/* Note */}
      <View className="mx-4 rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
        <Text className="text-xs text-blue-700 dark:text-blue-300">
          这个仪表盘页面组合了本文的响应式模式：导航栏手机/平板自适应 → 统计卡片
          2→4 列网格 → 侧边栏显隐 → KeyboardAvoidingView 表单。所有布局都遵循
          Mobile-First 原则。
        </Text>
      </View>
    </ScrollView>
  );
}
