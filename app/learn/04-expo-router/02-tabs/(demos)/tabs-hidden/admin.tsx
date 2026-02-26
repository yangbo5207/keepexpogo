import { View, Text, ScrollView } from 'react-native';

export default function TabsHiddenAdmin() {
  return (
    <ScrollView className="flex-1 bg-cream-50 dark:bg-night-800" contentContainerClassName="items-center justify-center gap-4 p-6">
      <Text className="text-4xl">🛡️</Text>
      <Text className="text-center text-sm text-cream-700 dark:text-night-200">
        Admin-only route hidden from tab bar. Only accessible via direct navigation.
      </Text>
      <View className="mt-4 w-full rounded-xl bg-warning-50 p-4 dark:bg-warning-900/20">
        <Text className="mb-1 text-xs font-semibold text-warning-700 dark:text-warning-300">Expo Router config</Text>
        <Text className="font-mono text-xs leading-5 text-warning-600 dark:text-warning-400">
          {'// app/(tabs)/_layout.tsx\n<Tabs.Screen\n  name="admin"\n  options={{\n    href: null,\n  }}\n/>'}
        </Text>
      </View>
    </ScrollView>
  );
}
