import { View, Text, ScrollView } from 'react-native';

export default function HeaderSettings() {
  return (
    <ScrollView className="flex-1 bg-white dark:bg-[#151718]" contentContainerClassName="gap-4 p-4 pb-8">
      <View className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
        <Text className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
          Current header options
        </Text>
        <View className="gap-1.5">
          <View className="flex-row justify-between">
            <Text className="text-xs text-gray-500 dark:text-gray-400">headerStyle</Text>
            <Text className="font-mono text-xs text-indigo-600 dark:text-indigo-400">
              {"{ backgroundColor: '#f3f4f6' }"}
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-xs text-gray-500 dark:text-gray-400">headerTintColor</Text>
            <Text className="font-mono text-xs text-indigo-600 dark:text-indigo-400">'#1f2937'</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-xs text-gray-500 dark:text-gray-400">headerLargeTitle</Text>
            <Text className="font-mono text-xs text-indigo-600 dark:text-indigo-400">true</Text>
          </View>
        </View>
      </View>

      <View className="rounded-xl bg-indigo-50 p-4 dark:bg-indigo-900/20">
        <Text className="mb-1 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
          Expo Router equivalent
        </Text>
        <Text className="font-mono text-xs leading-5 text-indigo-600 dark:text-indigo-400">
          {'<Stack.Screen\n  name="settings"\n  options={{\n    title: "Settings",\n    headerLargeTitle: true,\n  }}\n/>'}
        </Text>
      </View>
    </ScrollView>
  );
}
