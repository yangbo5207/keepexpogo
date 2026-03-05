import React from 'react';
import { View, Text, ScrollView, Pressable, TextInput } from 'react-native';

export default function GroupPeerVariants() {
  return (
    <ScrollView className="flex-1" contentContainerClassName="gap-6 p-4 pb-12">
      <Text className="text-xl font-bold text-cream-900 dark:text-night-50">
        Group & Peer 变体
      </Text>

      {/* Group Demo 1 */}
      <View className="gap-2">
        <Text className="text-sm font-semibold text-cream-700 dark:text-night-200">
          Group 变体 — 父组件驱动子组件样式
        </Text>
        <Text className="text-xs text-cream-600 dark:text-night-300">
          按住卡片，内部图标和文字同步变色
        </Text>

        <Pressable className="group flex-row items-center gap-4 rounded-xs bg-cream-50 p-4 active:bg-blue-50 dark:bg-night-700 dark:active:bg-blue-900/30">
          <View className="h-12 w-12 items-center justify-center rounded-full bg-blue-100 group-active:bg-blue-500 dark:bg-blue-900/30 dark:group-active:bg-blue-500">
            <Text className="text-xl text-blue-500 group-active:text-cream-50 dark:text-blue-400 dark:group-active:text-cream-50">
              ★
            </Text>
          </View>
          <View className="flex-1">
            <Text className="text-base font-semibold text-cream-800 group-active:text-blue-600 dark:text-night-100 dark:group-active:text-blue-400">
              收藏的项目
            </Text>
            <Text className="text-sm text-cream-500 group-active:text-blue-400 dark:text-cream-400 dark:group-active:text-blue-300">
              按住查看 group-active 效果
            </Text>
          </View>
        </Pressable>
      </View>

      {/* Group Demo 2 */}
      <View className="gap-2">
        <Text className="text-xs text-cream-600 dark:text-night-300">
          另一个 Group 示例：消息卡片
        </Text>

        <Pressable className="group rounded-xs bg-cream-50 p-4 active:bg-emerald-50 dark:bg-night-700 dark:active:bg-emerald-900/20">
          <View className="flex-row items-center gap-3">
            <View className="h-10 w-10 items-center justify-center rounded-full bg-emerald-100 group-active:bg-emerald-500 dark:bg-emerald-900/30">
              <Text className="text-base text-emerald-600 group-active:text-cream-50 dark:text-emerald-400">
                ✉
              </Text>
            </View>
            <View className="flex-1">
              <Text className="text-sm font-semibold text-cream-800 group-active:text-emerald-700 dark:text-night-100">
                新消息通知
              </Text>
              <Text className="text-xs text-cream-400 group-active:text-emerald-500">
                3 条未读消息
              </Text>
            </View>
            <Text className="text-xs text-cream-400 group-active:text-emerald-500">
              刚刚
            </Text>
          </View>
        </Pressable>
      </View>

      {/* Peer Demo 1 */}
      <View className="gap-2">
        <Text className="text-sm font-semibold text-cream-700 dark:text-night-200">
          Peer 变体 — 兄弟组件状态联动
        </Text>
        <Text className="text-xs text-cream-600 dark:text-night-300">
          聚焦输入框，提示文字变色
        </Text>

        <View className="gap-1">
          <TextInput
            className="peer rounded-xs border border-cream-300 px-4 py-2 text-cream-800 focus:border-blue-500 dark:border-night-500 dark:text-night-100 dark:focus:border-blue-400"
            placeholder="点击聚焦此输入框"
            placeholderTextColor="#9ca3af"
          />
          <Text className="text-xs text-cream-400 peer-focus:text-blue-500 dark:text-cream-500 dark:peer-focus:text-blue-400">
            ✓ 输入框已聚焦 — 此文字通过 peer-focus: 变色
          </Text>
        </View>
      </View>

      {/* Peer Demo 2 */}
      <View className="gap-2">
        <Text className="text-xs text-cream-600 dark:text-night-300">
          另一个 Peer 示例：搜索框 + 提示
        </Text>

        <View className="gap-1">
          <TextInput
            className="peer rounded-xs border border-cream-300 bg-cream-50 px-4 py-2 text-cream-800 focus:border-purple-500 focus:bg-cream-50 dark:border-night-500 dark:bg-night-700 dark:text-night-100 dark:focus:border-purple-400"
            placeholder="搜索..."
            placeholderTextColor="#9ca3af"
          />
          <Text className="text-xs text-transparent peer-focus:text-purple-500 dark:peer-focus:text-purple-400">
            支持按名称、标签、关键词搜索
          </Text>
        </View>
      </View>

      {/* Usage Notes */}
      <View className="gap-2 rounded-xs bg-blue-50 p-3 dark:bg-blue-900/20">
        <Text className="text-xs font-semibold text-blue-800 dark:text-blue-200">
          使用场景
        </Text>
        <Text className="text-xs text-blue-700 dark:text-blue-300">
          • Group：父组件状态（按下、悬停）驱动多个子组件同步变化{'\n'}
          • Peer：兄弟组件状态（聚焦、选中）联动后续兄弟组件{'\n'}
          • 注意：peer 只能影响 DOM 中后面的兄弟节点
        </Text>
      </View>
    </ScrollView>
  );
}
