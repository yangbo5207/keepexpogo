import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { IconSymbol } from '@/components/ui/icon-symbol';

const menuItems = [
  {
    label: '设置',
    icon: 'house.fill' as const,
    route: '/settings' as const,
  },
  {
    label: '组件',
    icon: 'chevron.left.forwardslash.chevron.right' as const,
    route: '/components-gallery' as const,
  },
];

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white dark:bg-[#151718]">
      <ScrollView contentContainerClassName="p-4 pb-8">
        <View className="mb-4 pt-12">
          <Text className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Profile
          </Text>
          <Text className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Settings and project components.
          </Text>
        </View>

        <View className="mt-2 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={item.label}
              className={`flex-row items-center px-4 py-4 ${
                index < menuItems.length - 1
                  ? 'border-b border-gray-200 dark:border-gray-700'
                  : ''
              }`}
              activeOpacity={0.6}
              onPress={() => router.push(item.route)}
            >
              <IconSymbol name={item.icon} size={22} color="#9ca3af" />
              <Text className="ml-3 flex-1 text-base text-gray-900 dark:text-gray-100">
                {item.label}
              </Text>
              <IconSymbol name="chevron.right" size={18} color="#9ca3af" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
