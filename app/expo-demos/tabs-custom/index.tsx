import { View, Text, ScrollView } from 'react-native';

export default function CustomTabFeed() {
  return (
    <ScrollView className="flex-1 bg-white dark:bg-[#151718]" contentContainerClassName="gap-4 p-4 pb-8">
      <View className="items-center gap-3 pt-6">
        <Text className="text-3xl">●</Text>
        <Text className="text-xl font-bold text-gray-800 dark:text-gray-100">Feed</Text>
        <Text className="text-center text-sm text-gray-500 dark:text-gray-400">Active tab: feed</Text>
      </View>
      <View className="gap-3 pt-4">
        <View className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
          <Text className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">Custom Tab Bar features</Text>
          <View className="gap-1.5">
            <Text className="text-xs text-gray-500 dark:text-gray-400">• Animated sliding indicator</Text>
            <Text className="text-xs text-gray-500 dark:text-gray-400">• Custom background with rounded corners</Text>
            <Text className="text-xs text-gray-500 dark:text-gray-400">• Icon transition on selection</Text>
            <Text className="text-xs text-gray-500 dark:text-gray-400">• Spring physics animation</Text>
          </View>
        </View>
        <View className="rounded-xl bg-teal-50 p-4 dark:bg-teal-900/20">
          <Text className="mb-1 text-xs font-semibold text-teal-700 dark:text-teal-300">Expo Router equivalent</Text>
          <Text className="font-mono text-xs leading-5 text-teal-600 dark:text-teal-400">
            {'// app/(tabs)/_layout.tsx\n<Tabs\n  tabBar={(props) => (\n    <MyCustomTabBar {...props} />\n  )}\n>\n  <Tabs.Screen name="feed" />\n  <Tabs.Screen name="search" />\n  <Tabs.Screen name="create" />\n  <Tabs.Screen name="inbox" />\n</Tabs>'}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
