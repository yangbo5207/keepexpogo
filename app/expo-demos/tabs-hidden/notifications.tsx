import { View, Text, ScrollView } from 'react-native';

export default function TabsHiddenNotifications() {
  return (
    <ScrollView className="flex-1 bg-white dark:bg-[#151718]" contentContainerClassName="items-center justify-center gap-4 p-6">
      <Text className="text-4xl">🔔</Text>
      <Text className="text-xl font-bold text-gray-800 dark:text-gray-100">Notifications</Text>
      <Text className="text-center text-sm text-gray-500 dark:text-gray-400">
        This route is hidden from tab bar (href: null) but can be navigated to programmatically.
      </Text>
      <View className="mt-4 w-full rounded-xl bg-amber-50 p-4 dark:bg-amber-900/20">
        <Text className="mb-1 text-xs font-semibold text-amber-700 dark:text-amber-300">Expo Router config</Text>
        <Text className="font-mono text-xs leading-5 text-amber-600 dark:text-amber-400">
          {'// app/(tabs)/_layout.tsx\n<Tabs.Screen\n  name="notifications"\n  options={{\n    href: null,\n  }}\n/>'}
        </Text>
      </View>
      <View className="w-full rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
        <Text className="mb-1 text-xs font-semibold text-blue-700 dark:text-blue-300">Navigate to this route</Text>
        <Text className="font-mono text-xs leading-5 text-blue-600 dark:text-blue-400">
          {"// From any screen:\nrouter.push('/notifications')"}
        </Text>
      </View>
    </ScrollView>
  );
}
