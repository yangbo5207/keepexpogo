import { View, Text, ScrollView } from 'react-native';

export default function HideTabbarSettings() {
  return (
    <ScrollView className="flex-1 bg-white dark:bg-[#151718]" contentContainerClassName="items-center justify-center gap-4 p-6">
      <Text className="text-3xl">⚙️</Text>
      <Text className="text-lg font-bold text-gray-800 dark:text-gray-100">Settings Screen</Text>
      <Text className="text-center text-sm text-gray-500 dark:text-gray-400">
        Also outside (tabs), no tab bar visible.
      </Text>
      <View className="w-full rounded-xl bg-amber-50 p-4 dark:bg-amber-900/20">
        <Text className="mb-1 text-xs font-semibold text-amber-700 dark:text-amber-300">Alternative: hide via tabBarStyle</Text>
        <Text className="font-mono text-xs leading-5 text-amber-600 dark:text-amber-400">
          {'// Inside (tabs), hide bar for one screen:\n<Tabs.Screen\n  name="settings"\n  options={{\n    tabBarStyle: { display: "none" }\n  }}\n/>'}
        </Text>
      </View>
    </ScrollView>
  );
}
