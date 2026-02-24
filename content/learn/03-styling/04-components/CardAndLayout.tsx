import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';

// ═══════════════════════════════════════════════════════════
//  Card 组合组件
// ═══════════════════════════════════════════════════════════
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

function Card({ children, className = '' }: CardProps) {
  return (
    <View
      className={`rounded-2xl bg-white dark:bg-gray-800 ${className}`}
    >
      {children}
    </View>
  );
}

function CardHeader({ children, className = '' }: CardProps) {
  return (
    <View
      className={`border-b border-gray-100 px-4 py-3 dark:border-gray-700 ${className}`}
    >
      {children}
    </View>
  );
}

function CardBody({ children, className = '' }: CardProps) {
  return <View className={`px-4 py-3 ${className}`}>{children}</View>;
}

function CardFooter({ children, className = '' }: CardProps) {
  return (
    <View
      className={`border-t border-gray-100 px-4 py-3 dark:border-gray-700 ${className}`}
    >
      {children}
    </View>
  );
}

// ═══════════════════════════════════════════════════════════
//  Badge 组件
// ═══════════════════════════════════════════════════════════
type BadgeStatus = 'success' | 'warning' | 'error' | 'info';

const badgeBgMap: Record<BadgeStatus, string> = {
  success: 'bg-green-100 dark:bg-green-900/30',
  warning: 'bg-amber-100 dark:bg-amber-900/30',
  error: 'bg-red-100 dark:bg-red-900/30',
  info: 'bg-blue-100 dark:bg-blue-900/30',
};

const badgeTextMap: Record<BadgeStatus, string> = {
  success: 'text-green-700 dark:text-green-300',
  warning: 'text-amber-700 dark:text-amber-300',
  error: 'text-red-700 dark:text-red-300',
  info: 'text-blue-700 dark:text-blue-300',
};

interface BadgeProps {
  status: BadgeStatus;
  label: string;
  className?: string;
}

function Badge({ status, label, className = '' }: BadgeProps) {
  return (
    <View className={`rounded-full px-2.5 py-0.5 ${badgeBgMap[status]} ${className}`}>
      <Text className={`text-xs font-semibold ${badgeTextMap[status]}`}>
        {label}
      </Text>
    </View>
  );
}

// ═══════════════════════════════════════════════════════════
//  Avatar 组件
// ═══════════════════════════════════════════════════════════
type AvatarSize = 'sm' | 'md' | 'lg';

const avatarSizeMap: Record<AvatarSize, string> = {
  sm: 'h-8 w-8',
  md: 'h-12 w-12',
  lg: 'h-16 w-16',
};

const avatarTextMap: Record<AvatarSize, string> = {
  sm: 'text-xs',
  md: 'text-base',
  lg: 'text-xl',
};

interface AvatarProps {
  name: string;
  size?: AvatarSize;
  className?: string;
}

function Avatar({ name, size = 'md', className = '' }: AvatarProps) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <View
      className={`items-center justify-center rounded-full bg-blue-500 dark:bg-blue-600 ${avatarSizeMap[size]} ${className}`}
    >
      <Text className={`font-bold text-white ${avatarTextMap[size]}`}>
        {initials}
      </Text>
    </View>
  );
}

// ═══════════════════════════════════════════════════════════
//  Alert 组件
// ═══════════════════════════════════════════════════════════
type AlertVariant = 'info' | 'success' | 'warning' | 'error';

const alertBgMap: Record<AlertVariant, string> = {
  info: 'bg-blue-50 dark:bg-blue-900/20',
  success: 'bg-green-50 dark:bg-green-900/20',
  warning: 'bg-amber-50 dark:bg-amber-900/20',
  error: 'bg-red-50 dark:bg-red-900/20',
};

const alertBorderMap: Record<AlertVariant, string> = {
  info: 'border-l-4 border-blue-500',
  success: 'border-l-4 border-green-500',
  warning: 'border-l-4 border-amber-500',
  error: 'border-l-4 border-red-500',
};

const alertIconMap: Record<AlertVariant, string> = {
  info: 'ℹ️',
  success: '✅',
  warning: '⚠️',
  error: '❌',
};

const alertTitleColorMap: Record<AlertVariant, string> = {
  info: 'text-blue-800 dark:text-blue-200',
  success: 'text-green-800 dark:text-green-200',
  warning: 'text-amber-800 dark:text-amber-200',
  error: 'text-red-800 dark:text-red-200',
};

const alertDescColorMap: Record<AlertVariant, string> = {
  info: 'text-blue-700 dark:text-blue-300',
  success: 'text-green-700 dark:text-green-300',
  warning: 'text-amber-700 dark:text-amber-300',
  error: 'text-red-700 dark:text-red-300',
};

interface AlertProps {
  variant: AlertVariant;
  title: string;
  description?: string;
  className?: string;
}

function Alert({ variant, title, description, className = '' }: AlertProps) {
  return (
    <View
      className={`rounded-lg p-3 ${alertBgMap[variant]} ${alertBorderMap[variant]} ${className}`}
    >
      <View className="flex-row items-center gap-2">
        <Text className="text-base">{alertIconMap[variant]}</Text>
        <Text className={`text-sm font-semibold ${alertTitleColorMap[variant]}`}>
          {title}
        </Text>
      </View>
      {description && (
        <Text className={`mt-1 pl-7 text-xs ${alertDescColorMap[variant]}`}>
          {description}
        </Text>
      )}
    </View>
  );
}

// ═══════════════════════════════════════════════════════════
//  Demo
// ═══════════════════════════════════════════════════════════
export default function CardAndLayout() {
  return (
    <ScrollView className="flex-1" contentContainerClassName="gap-6 p-4 pb-12">
      <Text className="text-xl font-bold text-gray-800 dark:text-gray-100">
        Card / Badge / Avatar / Alert
      </Text>

      {/* ── Card 组合 API ─────────────────────── */}
      <View className="gap-2">
        <Text className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          Card 组合式 API
        </Text>
        <Text className="text-xs text-gray-500 dark:text-gray-400">
          Card + CardHeader + CardBody + CardFooter
        </Text>
      </View>

      <Card>
        <CardHeader>
          <Text className="text-base font-semibold text-gray-800 dark:text-gray-100">
            项目概览
          </Text>
        </CardHeader>
        <CardBody>
          <Text className="text-sm text-gray-600 dark:text-gray-400">
            这是一个使用 NativeWind 构建的组件库示例。Card
            组件由四个子组件组合而成，支持 className 透传。
          </Text>
        </CardBody>
        <CardFooter>
          <Text className="text-xs text-gray-400 dark:text-gray-500">
            最后更新：2025 年 6 月
          </Text>
        </CardFooter>
      </Card>

      {/* ── Badge ────────────────────────────── */}
      <View className="gap-2">
        <Text className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          Badge 状态变体
        </Text>
        <View className="flex-row flex-wrap gap-2">
          <Badge status="success" label="在线" />
          <Badge status="warning" label="离开" />
          <Badge status="error" label="忙碌" />
          <Badge status="info" label="新消息" />
        </View>
      </View>

      {/* ── Avatar ───────────────────────────── */}
      <View className="gap-2">
        <Text className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          Avatar 尺寸变体 + 文字回退
        </Text>
        <View className="flex-row items-end gap-4">
          <Avatar name="张三" size="sm" />
          <Avatar name="Li Si" size="md" />
          <Avatar name="王五" size="lg" />
        </View>
      </View>

      {/* ── Alert ────────────────────────────── */}
      <View className="gap-2">
        <Text className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          Alert 语义变体
        </Text>
      </View>

      <View className="gap-3">
        <Alert variant="info" title="提示" description="这是一条信息提示。" />
        <Alert variant="success" title="成功" description="操作已成功完成。" />
        <Alert variant="warning" title="警告" description="请注意潜在的风险。" />
        <Alert variant="error" title="错误" description="操作失败，请重试。" />
      </View>

      {/* ── 组合实战：用户资料卡片 ───────────── */}
      <View className="gap-2">
        <Text className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          组合实战 — 用户资料卡片
        </Text>
        <Text className="text-xs text-gray-500 dark:text-gray-400">
          Card + Avatar + Badge + Alert + Button 整合
        </Text>
      </View>

      <Card>
        <CardHeader className="flex-row items-center gap-3">
          <Avatar name="Yang Bo" size="lg" />
          <View className="flex-1">
            <View className="flex-row items-center gap-2">
              <Text className="text-lg font-bold text-gray-800 dark:text-gray-100">
                Yang Bo
              </Text>
              <Badge status="success" label="在线" />
            </View>
            <Text className="text-sm text-gray-500 dark:text-gray-400">
              前端工程师 · React Native
            </Text>
          </View>
        </CardHeader>
        <CardBody className="gap-3">
          <Text className="text-sm text-gray-600 dark:text-gray-400">
            专注于跨平台移动开发，擅长 React Native + NativeWind
            组件库设计。目前正在维护 keepexpogo 项目。
          </Text>
          <Alert
            variant="info"
            title="近期动态"
            description="发布了 NativeWind 自定义组件封装教程。"
          />
        </CardBody>
        <CardFooter className="flex-row gap-3">
          <Pressable className="flex-1 items-center rounded-lg bg-blue-500 py-2.5 active:bg-blue-700 dark:bg-blue-600">
            <Text className="text-sm font-semibold text-white">关注</Text>
          </Pressable>
          <Pressable className="flex-1 items-center rounded-lg bg-gray-200 py-2.5 active:bg-gray-300 dark:bg-gray-700">
            <Text className="text-sm font-semibold text-gray-800 dark:text-gray-100">
              消息
            </Text>
          </Pressable>
        </CardFooter>
      </Card>

      {/* Note */}
      <View className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
        <Text className="text-xs text-blue-700 dark:text-blue-300">
          核心设计：Card 使用组合式 API（Composition Pattern），通过 children
          透传内容，每个子组件只负责自身的边框和间距。Badge、Avatar、Alert
          各自封装变体映射。最终在用户资料卡片中，所有组件协同组合为一个完整的 UI
          场景。
        </Text>
      </View>
    </ScrollView>
  );
}
