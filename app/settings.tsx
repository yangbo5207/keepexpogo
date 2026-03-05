import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Stack } from 'expo-router';
import { Card } from '@/components/ui/card';
import { ListRow, ListRowGroup } from '@/components/ui/list-row';

const settingsItems = [
  { label: '深色模式', detail: '跟随系统设置' },
  { label: '语言', detail: '中文（简体）' },
  { label: '版本信息', detail: 'v1.0.0' },
];

export default function SettingsScreen() {
  return (
    <View className="flex-1 bg-cream-50 dark:bg-night-800">
      <Stack.Screen options={{ title: '设置' }} />
      <ScrollView contentContainerClassName="p-4 pb-10">
        <Card className="mb-5">
          <Card.Eyebrow>偏好设置</Card.Eyebrow>
          <Card.Title>全局外观与语言</Card.Title>
          <Card.Description>统一使用奶白轻奢主题，支持深色模式自动切换。</Card.Description>
        </Card>

        <Text className="mb-3 text-xs font-semibold uppercase tracking-widest text-cream-600 dark:text-night-200">
          配置项
        </Text>
        <ListRowGroup>
          {settingsItems.map((item) => (
            <ListRow
              key={item.label}
              title={item.label}
              description={item.detail}
            />
          ))}
        </ListRowGroup>
      </ScrollView>
    </View>
  );
}
