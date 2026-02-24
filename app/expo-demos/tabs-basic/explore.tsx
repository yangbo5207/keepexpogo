import { View, Text, ScrollView } from 'react-native';

export default function TabsBasicExplore() {
  return (
    <ScrollView className="flex-1 bg-white dark:bg-[#151718]" contentContainerClassName="gap-4 p-4 pb-8">
      <View className="items-center gap-3 pt-8">
        <Text className="text-4xl">🔎</Text>
        <Text className="text-xl font-bold text-gray-800 dark:text-gray-100">Explore</Text>
        <Text className="text-center text-sm text-gray-500 dark:text-gray-400">
          Discover new content, trending topics, and popular creators.
        </Text>
      </View>

      <View className="gap-3 pt-4">
        {[1, 2, 3].map((i) => (
          <View key={i} className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
            <View className="flex-row items-center gap-3">
              <View className="h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
                <Text className="text-sm">🔍</Text>
              </View>
              <View className="flex-1">
                <Text className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                  Explore Item {i}
                </Text>
                <Text className="text-xs text-gray-400 dark:text-gray-500">
                  Sample content for the explore tab
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
