import { View, Text, ScrollView } from 'react-native';

export default function HideTabbarSettings() {
  return (
    <ScrollView className="flex-1 bg-cream-50 dark:bg-night-800" contentContainerClassName="items-center justify-center gap-4 p-6">
      <Text className="text-3xl">⚙️</Text>
      <Text className="text-center text-sm text-cream-700 dark:text-night-200">
        Also outside (tabs), no tab bar visible.
      </Text>
      <View className="w-full rounded-xl bg-warning-50 p-4 dark:bg-warning-900/20">
        <Text className="mb-1 text-xs font-semibold text-warning-700 dark:text-warning-300">Alternative: hide via tabBarStyle</Text>
        <Text className="font-mono text-xs leading-5 text-warning-600 dark:text-warning-400">
          {'// Inside (tabs), hide bar for one screen:\n<Tabs.Screen\n  name="settings"\n  options={{\n    tabBarStyle: { display: "none" }\n  }}\n/>'}
        </Text>
      </View>
    </ScrollView>
  );
}
