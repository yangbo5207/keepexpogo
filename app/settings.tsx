import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Stack } from 'expo-router';

const settingsItems = [
  { label: '深色模式', detail: '跟随系统' },
  { label: '语言', detail: '中文' },
  { label: '关于', detail: 'v1.0.0' },
];

export default function SettingsScreen() {
  return (
    <View className="flex-1 bg-white dark:bg-[#151718]">
      <Stack.Screen options={{ title: '设置' }} />
      <ScrollView contentContainerClassName="p-4 pb-8">
        <View className="overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
          {settingsItems.map((item, index) => (
            <View
              key={item.label}
              className={`flex-row items-center justify-between px-4 py-4 ${
                index < settingsItems.length - 1
                  ? 'border-b border-gray-200 dark:border-gray-700'
                  : ''
              }`}
            >
              <Text className="text-base text-gray-900 dark:text-gray-100">
                {item.label}
              </Text>
              <Text className="text-sm text-gray-500 dark:text-gray-400">
                {item.detail}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
