import { View, Text, ScrollView } from 'react-native';

export default function TabsBasicHome() {
  return (
    <ScrollView className="flex-1 bg-cream-50 dark:bg-night-800" contentContainerClassName="gap-4 p-4 pb-8">
      <View className="items-center gap-3 pt-8">
        <Text className="text-4xl">🏡</Text>
        <Text className="text-center text-sm text-cream-700 dark:text-night-200">
          Welcome to the Home feed. Browse latest updates and recommendations.
        </Text>
      </View>

      <View className="gap-3 pt-4">
        {[1, 2, 3].map((i) => (
          <View key={i} className="rounded-xl bg-cream-100 p-4 dark:bg-night-700">
            <View className="flex-row items-center gap-3">
              <View className="h-10 w-10 items-center justify-center rounded-full bg-cream-200 dark:bg-night-600">
                <Text className="text-sm">🏠</Text>
              </View>
              <View className="flex-1">
                <Text className="text-sm font-semibold text-cream-900 dark:text-night-50">
                  Home Item {i}
                </Text>
                <Text className="text-xs text-cream-600 dark:text-cream-700">
                  Sample content for the home tab
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>

      <View className="rounded-xl bg-primary-50 p-4 dark:bg-primary-900/20">
        <Text className="mb-1 text-xs font-semibold text-primary-700 dark:text-primary-300">
          Expo Router file structure
        </Text>
        <Text className="font-mono text-xs leading-5 text-primary-600 dark:text-primary-400">
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
