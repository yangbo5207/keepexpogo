import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';

/**
 * Design Tokens — TypeScript 令牌对象
 * 使用 as const 确保类型安全，组件通过令牌消费样式
 */
const tokens = {
  colors: {
    primary: 'bg-primary-500',
    primaryLight: 'bg-primary-50',
    secondary: 'bg-secondary-500',
    secondaryLight: 'bg-secondary-50',
    success: 'bg-success-500',
    danger: 'bg-danger-500',
    warning: 'bg-warning-500',
  },
  text: {
    primary: 'text-primary-700 dark:text-primary-300',
    secondary: 'text-secondary-700 dark:text-secondary-300',
    success: 'text-success-700 dark:text-success-300',
    danger: 'text-danger-700 dark:text-danger-300',
    warning: 'text-warning-700 dark:text-warning-300',
    heading: 'text-gray-900 dark:text-gray-100',
    body: 'text-gray-600 dark:text-gray-400',
    muted: 'text-gray-400 dark:text-gray-500',
  },
  components: {
    card: 'rounded-card bg-white p-4 dark:bg-gray-800',
    button: {
      primary: 'items-center rounded-button bg-primary-500 px-5 py-3 active:bg-primary-700',
      danger: 'items-center rounded-button bg-danger-500 px-5 py-3 active:bg-danger-700',
      ghost: 'items-center rounded-button border border-gray-300 px-5 py-3 active:bg-gray-100 dark:border-gray-600 dark:active:bg-gray-700',
    },
    badge: {
      success: 'rounded-full bg-success-100 px-3 py-1 dark:bg-success-900/30',
      warning: 'rounded-full bg-warning-100 px-3 py-1 dark:bg-warning-900/30',
      danger: 'rounded-full bg-danger-100 px-3 py-1 dark:bg-danger-900/30',
    },
  },
} as const;

function TokenCard() {
  return (
    <View className={tokens.components.card}>
      <View className="flex-row items-center justify-between">
        <View className="flex-1">
          <Text className={`text-lg font-bold ${tokens.text.heading}`}>
            Token-Driven Card
          </Text>
          <Text className={`mt-1 text-sm ${tokens.text.body}`}>
            所有样式均来自 tokens 对象，而非硬编码类名
          </Text>
        </View>
        <View className={tokens.components.badge.success}>
          <Text className={`text-xs font-semibold ${tokens.text.success}`}>
            Active
          </Text>
        </View>
      </View>

      <View className="mt-4 flex-row gap-2">
        <View className={tokens.components.badge.warning}>
          <Text className={`text-xs font-semibold ${tokens.text.warning}`}>
            React Native
          </Text>
        </View>
        <View className={tokens.components.badge.danger}>
          <Text className={`text-xs font-semibold ${tokens.text.danger}`}>
            NativeWind
          </Text>
        </View>
      </View>
    </View>
  );
}

function TokenButtons() {
  return (
    <View className="gap-3">
      <Pressable className={tokens.components.button.primary}>
        <Text className="text-base font-semibold text-white">Primary Action</Text>
      </Pressable>
      <Pressable className={tokens.components.button.danger}>
        <Text className="text-base font-semibold text-white">Delete</Text>
      </Pressable>
      <Pressable className={tokens.components.button.ghost}>
        <Text className="text-base font-semibold text-gray-700 dark:text-gray-300">
          Ghost Button
        </Text>
      </Pressable>
    </View>
  );
}

export default function DesignTokens() {
  return (
    <ScrollView className="flex-1" contentContainerClassName="gap-6 p-4 pb-12">
      <Text className="text-xl font-bold text-gray-800 dark:text-gray-100">
        Design Tokens
      </Text>

      <Text className="text-sm text-gray-600 dark:text-gray-400">
        使用 TypeScript as const 令牌对象统一管理样式，组件通过令牌消费
      </Text>

      {/* Token Object Preview */}
      <View className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800/50">
        <Text className="mb-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
          tokens 对象结构
        </Text>
        <Text className="font-mono text-xs text-gray-700 dark:text-gray-300">
          {'tokens.colors.primary → "bg-primary-500"'}
        </Text>
        <Text className="font-mono text-xs text-gray-700 dark:text-gray-300">
          {'tokens.components.card → "rounded-card bg-white ..."'}
        </Text>
        <Text className="font-mono text-xs text-gray-700 dark:text-gray-300">
          {'tokens.components.button.primary → "items-center ..."'}
        </Text>
      </View>

      {/* Token-Driven Card */}
      <View className="gap-2">
        <Text className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          Token-Driven Card
        </Text>
        <TokenCard />
      </View>

      {/* Token-Driven Buttons */}
      <View className="gap-2">
        <Text className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          Token-Driven Buttons
        </Text>
        <TokenButtons />
      </View>

      {/* Color Token Swatches */}
      <View className="gap-2">
        <Text className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          Color Tokens
        </Text>
        <View className="flex-row gap-2">
          {Object.entries(tokens.colors)
            .filter(([key]) => !key.endsWith('Light'))
            .map(([key, cls]) => (
              <View key={key} className="flex-1 items-center gap-1">
                <View className={`h-10 w-full rounded-lg ${cls}`} />
                <Text className="text-xs text-gray-500 dark:text-gray-400">{key}</Text>
              </View>
            ))}
        </View>
      </View>

      {/* Benefits */}
      <View className="rounded-lg bg-primary-50 p-4 dark:bg-primary-900/20">
        <Text className="text-sm font-semibold text-primary-800 dark:text-primary-200">
          as const 的好处
        </Text>
        <Text className="mt-1 text-xs text-primary-700 dark:text-primary-300">
          1. 类型安全：tokens.components.button.xxx 会有自动补全{'\n'}
          2. 单一数据源：修改一处，全局生效{'\n'}
          3. 可维护性：样式与组件逻辑分离{'\n'}
          4. 团队协作：设计师与开发者共享同一套令牌
        </Text>
      </View>
    </ScrollView>
  );
}
