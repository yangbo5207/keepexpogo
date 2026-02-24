import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';

const colorGroups = [
  {
    name: 'Primary',
    shades: [
      { label: '50', cls: 'bg-primary-50' },
      { label: '100', cls: 'bg-primary-100' },
      { label: '200', cls: 'bg-primary-200' },
      { label: '300', cls: 'bg-primary-300' },
      { label: '400', cls: 'bg-primary-400' },
      { label: '500', cls: 'bg-primary-500' },
      { label: '600', cls: 'bg-primary-600' },
      { label: '700', cls: 'bg-primary-700' },
      { label: '800', cls: 'bg-primary-800' },
      { label: '900', cls: 'bg-primary-900' },
    ],
  },
  {
    name: 'Secondary',
    shades: [
      { label: '50', cls: 'bg-secondary-50' },
      { label: '100', cls: 'bg-secondary-100' },
      { label: '200', cls: 'bg-secondary-200' },
      { label: '300', cls: 'bg-secondary-300' },
      { label: '400', cls: 'bg-secondary-400' },
      { label: '500', cls: 'bg-secondary-500' },
      { label: '600', cls: 'bg-secondary-600' },
      { label: '700', cls: 'bg-secondary-700' },
      { label: '800', cls: 'bg-secondary-800' },
      { label: '900', cls: 'bg-secondary-900' },
    ],
  },
  {
    name: 'Success',
    shades: [
      { label: '50', cls: 'bg-success-50' },
      { label: '100', cls: 'bg-success-100' },
      { label: '200', cls: 'bg-success-200' },
      { label: '300', cls: 'bg-success-300' },
      { label: '400', cls: 'bg-success-400' },
      { label: '500', cls: 'bg-success-500' },
      { label: '600', cls: 'bg-success-600' },
      { label: '700', cls: 'bg-success-700' },
      { label: '800', cls: 'bg-success-800' },
      { label: '900', cls: 'bg-success-900' },
    ],
  },
  {
    name: 'Danger',
    shades: [
      { label: '50', cls: 'bg-danger-50' },
      { label: '100', cls: 'bg-danger-100' },
      { label: '200', cls: 'bg-danger-200' },
      { label: '300', cls: 'bg-danger-300' },
      { label: '400', cls: 'bg-danger-400' },
      { label: '500', cls: 'bg-danger-500' },
      { label: '600', cls: 'bg-danger-600' },
      { label: '700', cls: 'bg-danger-700' },
      { label: '800', cls: 'bg-danger-800' },
      { label: '900', cls: 'bg-danger-900' },
    ],
  },
  {
    name: 'Warning',
    shades: [
      { label: '50', cls: 'bg-warning-50' },
      { label: '100', cls: 'bg-warning-100' },
      { label: '200', cls: 'bg-warning-200' },
      { label: '300', cls: 'bg-warning-300' },
      { label: '400', cls: 'bg-warning-400' },
      { label: '500', cls: 'bg-warning-500' },
      { label: '600', cls: 'bg-warning-600' },
      { label: '700', cls: 'bg-warning-700' },
      { label: '800', cls: 'bg-warning-800' },
      { label: '900', cls: 'bg-warning-900' },
    ],
  },
];

function ColorSwatch({ cls, label }: { cls: string; label: string }) {
  return (
    <View className="items-center">
      <View className={`h-8 w-8 rounded-sm ${cls}`} />
      <Text className="mt-1 text-xs text-gray-500 dark:text-gray-400">
        {label}
      </Text>
    </View>
  );
}

function ColorGroup({ name, shades }: { name: string; shades: { label: string; cls: string }[] }) {
  return (
    <View className="gap-2">
      <Text className="text-sm font-semibold text-gray-700 dark:text-gray-300">
        {name}
      </Text>
      <View className="flex-row flex-wrap gap-2">
        {shades.map((shade) => (
          <ColorSwatch key={shade.label} cls={shade.cls} label={shade.label} />
        ))}
      </View>
    </View>
  );
}

export default function CustomColors() {
  return (
    <ScrollView className="flex-1" contentContainerClassName="gap-6 p-4 pb-12">
      <Text className="text-xl font-bold text-gray-800 dark:text-gray-100">
        Custom Brand Colors
      </Text>

      <Text className="text-sm text-gray-600 dark:text-gray-400">
        通过 @theme 定义的 5 组品牌色，每组 10 个色阶（50-900）
      </Text>

      {/* Color Palettes */}
      {colorGroups.map((group) => (
        <ColorGroup key={group.name} name={group.name} shades={group.shades} />
      ))}

      {/* Opacity Modifiers */}
      <View className="gap-2">
        <Text className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          透明度修饰符
        </Text>
        <View className="flex-row gap-3">
          <View className="flex-1 items-center rounded-lg bg-primary-500/20 p-3">
            <Text className="text-xs text-primary-700 dark:text-primary-300">/20</Text>
          </View>
          <View className="flex-1 items-center rounded-lg bg-primary-500/50 p-3">
            <Text className="text-xs text-white">/50</Text>
          </View>
          <View className="flex-1 items-center rounded-lg bg-primary-500/80 p-3">
            <Text className="text-xs text-white">/80</Text>
          </View>
          <View className="flex-1 items-center rounded-lg bg-primary-500 p-3">
            <Text className="text-xs text-white">100</Text>
          </View>
        </View>
      </View>

      {/* Practical Use Cases */}
      <View className="gap-3">
        <Text className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          实际用例
        </Text>

        {/* Primary Button */}
        <Pressable className="items-center rounded-button bg-primary-500 py-3 active:bg-primary-700">
          <Text className="text-base font-semibold text-white">
            Primary 按钮
          </Text>
        </Pressable>

        {/* Danger Alert */}
        <View className="flex-row items-center gap-3 rounded-card bg-danger-50 p-4 dark:bg-danger-900/20">
          <View className="h-8 w-8 items-center justify-center rounded-full bg-danger-500">
            <Text className="text-sm font-bold text-white">!</Text>
          </View>
          <View className="flex-1">
            <Text className="text-sm font-semibold text-danger-800 dark:text-danger-200">
              操作失败
            </Text>
            <Text className="text-xs text-danger-600 dark:text-danger-400">
              请检查网络连接后重试
            </Text>
          </View>
        </View>

        {/* Success Badge */}
        <View className="flex-row gap-2">
          <View className="rounded-full bg-success-100 px-3 py-1 dark:bg-success-900/30">
            <Text className="text-xs font-semibold text-success-700 dark:text-success-300">
              已完成
            </Text>
          </View>
          <View className="rounded-full bg-warning-100 px-3 py-1 dark:bg-warning-900/30">
            <Text className="text-xs font-semibold text-warning-700 dark:text-warning-300">
              进行中
            </Text>
          </View>
          <View className="rounded-full bg-secondary-100 px-3 py-1 dark:bg-secondary-900/30">
            <Text className="text-xs font-semibold text-secondary-700 dark:text-secondary-300">
              待审核
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
