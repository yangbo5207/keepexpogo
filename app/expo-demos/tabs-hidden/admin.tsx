import { View, Text, ScrollView } from 'react-native';

export default function TabsHiddenAdmin() {
  return (
    <ScrollView className="flex-1 bg-white dark:bg-[#151718]" contentContainerClassName="items-center justify-center gap-4 p-6">
      <Text className="text-4xl">🛡️</Text>
      <Text className="text-xl font-bold text-gray-800 dark:text-gray-100">Admin Panel</Text>
      <Text className="text-center text-sm text-gray-500 dark:text-gray-400">
        Admin-only route hidden from tab bar. Only accessible via direct navigation.
      </Text>
      <View className="mt-4 w-full rounded-xl bg-amber-50 p-4 dark:bg-amber-900/20">
        <Text className="mb-1 text-xs font-semibold text-amber-700 dark:text-amber-300">Expo Router config</Text>
        <Text className="font-mono text-xs leading-5 text-amber-600 dark:text-amber-400">
          {'// app/(tabs)/_layout.tsx\n<Tabs.Screen\n  name="admin"\n  options={{\n    href: null,\n  }}\n/>'}
        </Text>
      </View>
    </ScrollView>
  );
}
