import { View, Text, ScrollView } from 'react-native';

export default function TabsHiddenNotifications() {
  return (
    <ScrollView className="flex-1 bg-cream-50 dark:bg-night-800" contentContainerClassName="items-center justify-center gap-4 p-6">
      <Text className="text-4xl">🔔</Text>
      <Text className="text-center text-sm text-cream-700 dark:text-night-200">
        This route is hidden from tab bar (href: null) but can be navigated to programmatically.
      </Text>
      <View className="mt-4 w-full rounded-xl bg-warning-50 p-4 dark:bg-warning-900/20">
        <Text className="mb-1 text-xs font-semibold text-warning-700 dark:text-warning-300">Expo Router config</Text>
        <Text className="font-mono text-xs leading-5 text-warning-600 dark:text-warning-400">
          {'// app/(tabs)/_layout.tsx\n<Tabs.Screen\n  name="notifications"\n  options={{\n    href: null,\n  }}\n/>'}
        </Text>
      </View>
      <View className="w-full rounded-xl bg-secondary-50 p-4 dark:bg-secondary-900/20">
        <Text className="mb-1 text-xs font-semibold text-secondary-700 dark:text-secondary-300">Navigate to this route</Text>
        <Text className="font-mono text-xs leading-5 text-secondary-600 dark:text-secondary-400">
          {"// From any screen:\nrouter.push('/notifications')"}
        </Text>
      </View>
    </ScrollView>
  );
}
