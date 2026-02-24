import { View, Text, ScrollView } from 'react-native';

export default function CrossNotifications() {
  return (
    <ScrollView className="flex-1 bg-white dark:bg-[#151718]" contentContainerClassName="items-center justify-center gap-4 p-6">
      <Text className="text-4xl">🔔</Text>
      <Text className="text-lg font-bold text-gray-800 dark:text-gray-100">Notifications</Text>
      <Text className="text-center text-sm text-gray-500 dark:text-gray-400">Full-screen pushed onto Root Stack — no tab bar</Text>
      <View className="mt-4 w-full rounded-xl bg-indigo-50 p-4 dark:bg-indigo-900/20">
        <Text className="mb-1 text-xs font-semibold text-indigo-700 dark:text-indigo-300">Expo Router navigation</Text>
        <Text className="font-mono text-xs leading-5 text-indigo-600 dark:text-indigo-400">
          {"// From inside any tab:\nrouter.push('/notifications')\n\n// This navigates to a screen in the\n// Root Stack (parent of tabs)."}
        </Text>
      </View>
    </ScrollView>
  );
}
