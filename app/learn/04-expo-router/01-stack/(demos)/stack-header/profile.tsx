import { View, Text, ScrollView } from 'react-native';

export default function HeaderProfile() {
  return (
    <ScrollView className="flex-1 bg-cream-50 dark:bg-night-800" contentContainerClassName="gap-4 p-4 pb-8">
      <View className="rounded-xl bg-cream-100 p-4 dark:bg-night-700">
        <Text className="mb-2 text-sm font-semibold text-cream-700 dark:text-night-200">
          Current header options
        </Text>
        <View className="gap-1.5">
          <View className="flex-row justify-between">
            <Text className="text-xs text-cream-700 dark:text-night-200">headerStyle</Text>
            <Text className="font-mono text-xs text-primary-600 dark:text-primary-400">
              {"{ backgroundColor: '#f43f5e' }"}
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-xs text-cream-700 dark:text-night-200">headerTintColor</Text>
            <Text className="font-mono text-xs text-primary-600 dark:text-primary-400">'#ffffff'</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-xs text-cream-700 dark:text-night-200">headerTitle</Text>
            <Text className="font-mono text-xs text-primary-600 dark:text-primary-400">{'() => <CustomTitle />'}</Text>
          </View>
        </View>
      </View>

      <View className="rounded-xl bg-primary-50 p-4 dark:bg-primary-900/20">
        <Text className="mb-1 text-xs font-semibold text-primary-700 dark:text-primary-300">
          Expo Router equivalent
        </Text>
        <Text className="font-mono text-xs leading-5 text-primary-600 dark:text-primary-400">
          {'<Stack.Screen\n  name="profile"\n  options={{\n    headerTitle: () => <CustomTitle />,\n  }}\n/>'}
        </Text>
      </View>
    </ScrollView>
  );
}
