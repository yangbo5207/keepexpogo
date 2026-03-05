import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';

type Variant = 'primary' | 'danger' | 'outline';
type Size = 'sm' | 'md' | 'lg';

const variantClasses: Record<Variant, { base: string; text: string }> = {
  primary: {
    base: 'bg-blue-500 active:bg-blue-700',
    text: 'text-cream-50',
  },
  danger: {
    base: 'bg-red-500 active:bg-red-700',
    text: 'text-cream-50',
  },
  outline: {
    base: 'border border-cream-300 bg-transparent active:bg-cream-100 dark:border-night-500 dark:active:bg-night-700',
    text: 'text-cream-700 dark:text-night-200',
  },
};

const sizeClasses: Record<Size, { base: string; text: string }> = {
  sm: { base: 'px-3 py-1 rounded-xs', text: 'text-xs' },
  md: { base: 'px-4 py-2 rounded-xs', text: 'text-sm' },
  lg: { base: 'px-6 py-3 rounded-xs', text: 'text-base' },
};

function getButtonClass(variant: Variant, size: Size) {
  const v = variantClasses[variant];
  const s = sizeClasses[size];
  return {
    base: `items-center ${v.base} ${s.base}`,
    text: `font-semibold ${v.text} ${s.text}`,
  };
}

const variants: Variant[] = ['primary', 'danger', 'outline'];
const sizes: Size[] = ['sm', 'md', 'lg'];
const variantLabels: Record<Variant, string> = {
  primary: 'Primary',
  danger: 'Danger',
  outline: 'Outline',
};
const sizeLabels: Record<Size, string> = { sm: 'SM', md: 'MD', lg: 'LG' };

export default function ComponentPatterns() {
  return (
    <ScrollView className="flex-1" contentContainerClassName="gap-6 p-4 pb-12">
      <Text className="text-xl font-bold text-cream-900 dark:text-night-50">
        动态类名与组件变体
      </Text>

      {/* Pattern 1: getButtonClass */}
      <View className="gap-2">
        <Text className="text-sm font-semibold text-cream-700 dark:text-night-200">
          变体函数：getButtonClass(variant, size)
        </Text>
        <Text className="text-xs text-cream-600 dark:text-night-300">
          3 个变体 × 3 个尺寸 = 9 种组合
        </Text>
      </View>

      {/* Button Matrix */}
      {variants.map((variant) => (
        <View key={variant} className="gap-2">
          <Text className="text-xs font-semibold text-cream-600 dark:text-night-300">
            {variantLabels[variant]}
          </Text>
          <View className="flex-row items-end gap-3">
            {sizes.map((size) => {
              const cls = getButtonClass(variant, size);
              return (
                <Pressable key={size} className={cls.base}>
                  <Text className={cls.text}>{sizeLabels[size]}</Text>
                </Pressable>
              );
            })}
          </View>
        </View>
      ))}

      {/* Pattern 2: Conditional className */}
      <View className="gap-2">
        <Text className="text-sm font-semibold text-cream-700 dark:text-night-200">
          条件类名组合
        </Text>
        <Text className="text-xs text-cream-600 dark:text-night-300">
          模板字符串拼接 vs 映射对象
        </Text>
      </View>

      <View className="gap-3">
        {/* Template literal approach */}
        <View className="gap-1">
          <Text className="text-xs text-cream-400">模板字符串拼接：</Text>
          {[true, false].map((isDisabled) => (
            <Pressable
              key={String(isDisabled)}
              className={`items-center rounded-xs py-2 ${
                isDisabled
                  ? 'bg-cream-200 dark:bg-night-600'
                  : 'bg-blue-500 active:bg-blue-700'
              }`}
              disabled={isDisabled}
            >
              <Text
                className={`text-sm font-semibold ${
                  isDisabled
                    ? 'text-cream-500 dark:text-night-400'
                    : 'text-cream-50'
                }`}
              >
                {isDisabled ? 'Disabled' : 'Enabled'}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Status badges */}
        <View className="gap-1">
          <Text className="text-xs text-cream-400">状态徽章（映射对象）：</Text>
          <View className="flex-row flex-wrap gap-2">
            {(['success', 'warning', 'error', 'info'] as const).map(
              (status) => {
                const badgeStyles = {
                  success: 'bg-green-100 dark:bg-green-900/30',
                  warning: 'bg-amber-100 dark:bg-amber-900/30',
                  error: 'bg-red-100 dark:bg-red-900/30',
                  info: 'bg-blue-100 dark:bg-blue-900/30',
                };
                const textStyles = {
                  success: 'text-green-700 dark:text-green-300',
                  warning: 'text-amber-700 dark:text-amber-300',
                  error: 'text-red-700 dark:text-red-300',
                  info: 'text-blue-700 dark:text-blue-300',
                };
                return (
                  <View
                    key={status}
                    className={`rounded-full px-3 py-1 ${badgeStyles[status]}`}
                  >
                    <Text
                      className={`text-xs font-semibold ${textStyles[status]}`}
                    >
                      {status}
                    </Text>
                  </View>
                );
              },
            )}
          </View>
        </View>
      </View>

      {/* Code explanation */}
      <View className="rounded-xs bg-cream-50 p-3 dark:bg-night-700">
        <Text className="text-xs text-cream-600 dark:text-night-300">
          核心思路：将变体（variant）和尺寸（size）映射为独立的 className
          片段，通过函数组合生成最终的 className
          字符串。这种模式类似于 class-variance-authority（CVA）的思路，但不依赖额外库。
        </Text>
      </View>
    </ScrollView>
  );
}
