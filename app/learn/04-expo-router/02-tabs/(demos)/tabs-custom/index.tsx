import { View, Text, ScrollView } from 'react-native';

export default function CustomTabFeed() {
  return (
    <ScrollView className="flex-1 bg-cream-50 dark:bg-night-800" contentContainerClassName="gap-4 p-4 pb-8">
      <View className="items-center gap-3 pt-6">
        <Text className="text-3xl">●</Text>
        <Text className="text-center text-sm text-cream-700 dark:text-night-200">Active tab: feed</Text>
      </View>
      <View className="gap-3 pt-4">
        <View className="rounded-xl bg-cream-100 p-4 dark:bg-night-700">
          <Text className="mb-2 text-sm font-semibold text-cream-700 dark:text-night-200">Custom Tab Bar features</Text>
          <View className="gap-1.5">
            <Text className="text-xs text-cream-700 dark:text-night-200">• Animated sliding indicator</Text>
            <Text className="text-xs text-cream-700 dark:text-night-200">• Custom background with rounded corners</Text>
            <Text className="text-xs text-cream-700 dark:text-night-200">• Icon transition on selection</Text>
            <Text className="text-xs text-cream-700 dark:text-night-200">• Spring physics animation</Text>
          </View>
        </View>
        <View className="rounded-xl bg-secondary-50 p-4 dark:bg-secondary-900/20">
          <Text className="mb-1 text-xs font-semibold text-secondary-700 dark:text-secondary-300">Expo Router equivalent</Text>
          <Text className="font-mono text-xs leading-5 text-secondary-600 dark:text-secondary-400">
            {'// app/(tabs)/_layout.tsx\n<Tabs\n  tabBar={(props) => (\n    <MyCustomTabBar {...props} />\n  )}\n>\n  <Tabs.Screen name="feed" />\n  <Tabs.Screen name="search" />\n  <Tabs.Screen name="create" />\n  <Tabs.Screen name="inbox" />\n</Tabs>'}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
