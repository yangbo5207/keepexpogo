import React from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';

// ─── Types ──────────────────────────────────────────────
interface InputProps {
  label: string;
  placeholder?: string;
  error?: string;
  className?: string;
}

// ─── Input Component ────────────────────────────────────
function Input({ label, placeholder, error, className = '' }: InputProps) {
  return (
    <View className={`gap-1 ${className}`}>
      <Text className="text-sm font-semibold text-cream-700 dark:text-night-200">
        {label}
      </Text>
      <TextInput
        className={`peer rounded-xs border px-4 py-2.5 text-sm text-cream-900 dark:text-night-50 ${
          error
            ? 'border-red-400 dark:border-red-500'
            : 'border-cream-300 focus:border-blue-500 dark:border-night-500 dark:focus:border-blue-400'
        }`}
        placeholder={placeholder}
        placeholderTextColor="#9ca3af"
      />
      {error ? (
        <Text className="text-xs text-red-500 dark:text-red-400">{error}</Text>
      ) : (
        <Text className="text-xs text-transparent peer-focus:text-blue-500 dark:peer-focus:text-blue-400">
          已聚焦 — 通过 peer-focus: 驱动此提示变色
        </Text>
      )}
    </View>
  );
}

// ─── Demo ───────────────────────────────────────────────
export default function FormComponents() {
  return (
    <ScrollView className="flex-1" contentContainerClassName="gap-6 p-4 pb-12">
      <Text className="text-xl font-bold text-cream-900 dark:text-night-50">
        Input 组件与表单
      </Text>

      {/* Basic Inputs */}
      <View className="gap-2">
        <Text className="text-sm font-semibold text-cream-700 dark:text-night-200">
          基础 Input — 聚焦时 peer 联动
        </Text>
        <Text className="text-xs text-cream-600 dark:text-night-300">
          点击输入框聚焦，观察下方提示文字变色（peer-focus:）
        </Text>
      </View>

      <View className="gap-4 rounded-xs bg-cream-50 p-4 dark:bg-night-700">
        <Input label="用户名" placeholder="请输入用户名" />
        <Input label="邮箱" placeholder="example@mail.com" />
      </View>

      {/* Error State */}
      <View className="gap-2">
        <Text className="text-sm font-semibold text-cream-700 dark:text-night-200">
          错误状态
        </Text>
        <Text className="text-xs text-cream-600 dark:text-night-300">
          error prop 触发红色边框 + 错误提示文字
        </Text>
      </View>

      <View className="gap-4 rounded-xs bg-cream-50 p-4 dark:bg-night-700">
        <Input
          label="密码"
          placeholder="请输入密码"
          error="密码长度不能少于 8 位"
        />
        <Input
          label="确认密码"
          placeholder="请再次输入密码"
          error="两次密码输入不一致"
        />
      </View>

      {/* Mock Form */}
      <View className="gap-2">
        <Text className="text-sm font-semibold text-cream-700 dark:text-night-200">
          模拟注册表单
        </Text>
        <Text className="text-xs text-cream-600 dark:text-night-300">
          组合多个 Input 展示表单布局
        </Text>
      </View>

      <View className="gap-4 rounded-xs bg-cream-50 p-4 dark:bg-night-700">
        <Input label="姓名" placeholder="张三" />
        <Input label="邮箱" placeholder="zhangsan@example.com" />
        <Input
          label="手机号"
          placeholder="13800138000"
          error="请输入有效的手机号码"
        />
        <Input label="地址" placeholder="北京市朝阳区..." />
      </View>

      {/* Note */}
      <View className="rounded-xs bg-blue-50 p-3 dark:bg-blue-900/20">
        <Text className="text-xs text-blue-700 dark:text-blue-300">
          核心设计：Input 组件内部使用 peer 标记 TextInput，后续的提示 Text 通过
          peer-focus: 响应聚焦状态。error prop
          存在时直接显示错误信息并切换为红色边框，不再显示 peer 联动提示。
        </Text>
      </View>
    </ScrollView>
  );
}
