import { View, Text, ScrollView } from 'react-native';

export default function TabsBasicHome() {
  return (
    <ScrollView className="flex-1 bg-white dark:bg-[#151718]" contentContainerClassName="gap-4 p-4 pb-8">
      <View className="items-center gap-3 pt-8">
        <Text className="text-4xl">🏡</Text>
        <Text className="text-xl font-bold text-gray-800 dark:text-gray-100">Home</Text>
        <Text className="text-center text-sm text-gray-500 dark:text-gray-400">
          Welcome to the Home feed. Browse latest updates and recommendations.
        </Text>
      </View>

      <View className="gap-3 pt-4">
        {[1, 2, 3].map((i) => (
          <View key={i} className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
            <View className="flex-row items-center gap-3">
              <View className="h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
                <Text className="text-sm">🏠</Text>
              </View>
              <View className="flex-1">
                <Text className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                  Home Item {i}
                </Text>
                <Text className="text-xs text-gray-400 dark:text-gray-500">
                  Sample content for the home tab
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>

      <View className="rounded-xl bg-indigo-50 p-4 dark:bg-indigo-900/20">
        <Text className="mb-1 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
          Expo Router file structure
        </Text>
        <Text className="font-mono text-xs leading-5 text-indigo-600 dark:text-indigo-400">
          {'app/(tabs)/\n'}
          {'├── _layout.tsx   ← <Tabs> navigator\n'}
          {'├── index.tsx     ← Home tab\n'}
          {'├── explore.tsx   ← Explore tab\n'}
          {'└── profile.tsx   ← Profile tab'}
        </Text>
      </View>
    </ScrollView>
  );
}
