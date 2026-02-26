import { View, Text, ScrollView } from 'react-native';

export default function CrossNotifications() {
  return (
    <ScrollView className="flex-1 bg-cream-50 dark:bg-night-800" contentContainerClassName="items-center justify-center gap-4 p-6">
      <Text className="text-4xl">🔔</Text>
      <Text className="text-center text-sm text-cream-700 dark:text-night-200">Full-screen pushed onto Root Stack — no tab bar</Text>
      <View className="mt-4 w-full rounded-xl bg-primary-50 p-4 dark:bg-primary-900/20">
        <Text className="mb-1 text-xs font-semibold text-primary-700 dark:text-primary-300">Expo Router navigation</Text>
        <Text className="font-mono text-xs leading-5 text-primary-600 dark:text-primary-400">
          {"// From inside any tab:\nrouter.push('/notifications')\n\n// This navigates to a screen in the\n// Root Stack (parent of tabs)."}
        </Text>
      </View>
    </ScrollView>
  );
}
