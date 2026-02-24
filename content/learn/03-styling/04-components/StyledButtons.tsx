import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from 'react-native';

// ─── Types ──────────────────────────────────────────────
type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
  onPress?: () => void;
}

// ─── Variant & Size Maps ────────────────────────────────
const variantClasses: Record<ButtonVariant, { base: string; text: string }> = {
  primary: {
    base: 'bg-blue-500 active:bg-blue-700 dark:bg-blue-600 dark:active:bg-blue-800',
    text: 'text-white',
  },
  secondary: {
    base: 'bg-gray-200 active:bg-gray-300 dark:bg-gray-700 dark:active:bg-gray-600',
    text: 'text-gray-800 dark:text-gray-100',
  },
  danger: {
    base: 'bg-red-500 active:bg-red-700 dark:bg-red-600 dark:active:bg-red-800',
    text: 'text-white',
  },
  ghost: {
    base: 'bg-transparent active:bg-gray-100 dark:active:bg-gray-800',
    text: 'text-blue-500 dark:text-blue-400',
  },
};

const sizeClasses: Record<ButtonSize, { base: string; text: string }> = {
  sm: { base: 'px-3 py-1.5 rounded-md gap-1.5', text: 'text-xs' },
  md: { base: 'px-4 py-2.5 rounded-lg gap-2', text: 'text-sm' },
  lg: { base: 'px-6 py-3.5 rounded-xl gap-2.5', text: 'text-base' },
};

const disabledClasses = {
  base: 'opacity-50',
};

const spinnerSize: Record<ButtonSize, number> = { sm: 12, md: 16, lg: 20 };

// ─── Button Component ───────────────────────────────────
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  children,
  className = '',
  onPress,
}: ButtonProps) {
  const v = variantClasses[variant];
  const s = sizeClasses[size];
  const isDisabled = disabled || loading;

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      className={`flex-row items-center justify-center ${v.base} ${s.base} ${isDisabled ? disabledClasses.base : ''} ${className}`}
    >
      {loading && (
        <ActivityIndicator
          size={spinnerSize[size]}
          color={variant === 'ghost' ? '#3b82f6' : '#ffffff'}
        />
      )}
      <Text className={`font-semibold ${v.text} ${s.text}`}>{children}</Text>
    </Pressable>
  );
}

// ─── Demo ───────────────────────────────────────────────
const variants: ButtonVariant[] = ['primary', 'secondary', 'danger', 'ghost'];
const sizes: ButtonSize[] = ['sm', 'md', 'lg'];
const variantLabels: Record<ButtonVariant, string> = {
  primary: 'Primary',
  secondary: 'Secondary',
  danger: 'Danger',
  ghost: 'Ghost',
};
const sizeLabels: Record<ButtonSize, string> = { sm: 'SM', md: 'MD', lg: 'LG' };

export default function StyledButtons() {
  return (
    <ScrollView className="flex-1" contentContainerClassName="gap-6 p-4 pb-12">
      <Text className="text-xl font-bold text-gray-800 dark:text-gray-100">
        Button 组件
      </Text>

      {/* Variant × Size Matrix */}
      <View className="gap-2">
        <Text className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          变体 × 尺寸矩阵
        </Text>
        <Text className="text-xs text-gray-500 dark:text-gray-400">
          4 variant × 3 size = 12 种组合
        </Text>
      </View>

      {variants.map((variant) => (
        <View key={variant} className="gap-2">
          <Text className="text-xs font-semibold text-gray-500 dark:text-gray-400">
            {variantLabels[variant]}
          </Text>
          <View className="flex-row flex-wrap items-end gap-3">
            {sizes.map((size) => (
              <Button key={size} variant={variant} size={size}>
                {sizeLabels[size]}
              </Button>
            ))}
          </View>
        </View>
      ))}

      {/* Disabled */}
      <View className="gap-2">
        <Text className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          Disabled 状态
        </Text>
        <View className="flex-row flex-wrap gap-3">
          {variants.map((variant) => (
            <Button key={variant} variant={variant} disabled>
              {variantLabels[variant]}
            </Button>
          ))}
        </View>
      </View>

      {/* Loading */}
      <View className="gap-2">
        <Text className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          Loading 状态
        </Text>
        <View className="flex-row flex-wrap gap-3">
          <Button variant="primary" loading>
            提交中
          </Button>
          <Button variant="danger" loading>
            删除中
          </Button>
          <Button variant="ghost" loading>
            加载中
          </Button>
        </View>
      </View>

      {/* className Merge */}
      <View className="gap-2">
        <Text className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          className 透传合并
        </Text>
        <Text className="text-xs text-gray-500 dark:text-gray-400">
          外部传入 className="w-full" 撑满容器宽度
        </Text>
        <Button variant="primary" size="lg" className="w-full">
          Full Width Button
        </Button>
        <Button variant="secondary" size="md" className="w-full">
          Full Width Secondary
        </Button>
      </View>

      {/* Note */}
      <View className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
        <Text className="text-xs text-blue-700 dark:text-blue-300">
          核心设计：variant 和 size 通过映射对象管理静态类名，disabled/loading
          通过 opacity 和 ActivityIndicator 表达状态，外部 className
          直接拼接实现透传合并。所有类名都是完整字符串，确保 Tailwind 可正确扫描。
        </Text>
      </View>
    </ScrollView>
  );
}
