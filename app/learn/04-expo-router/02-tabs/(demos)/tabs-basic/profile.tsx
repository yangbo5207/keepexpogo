import { View, Text, ScrollView } from 'react-native';

export default function TabsBasicProfile() {
  return (
    <ScrollView className="flex-1 bg-cream-50 dark:bg-night-800" contentContainerClassName="gap-4 p-4 pb-8">
      <View className="items-center gap-3 pt-8">
        <Text className="text-4xl">👤</Text>
        <Text className="text-center text-sm text-cream-700 dark:text-night-200">
          View and edit your profile, settings, and preferences.
        </Text>
      </View>

      <View className="gap-3 pt-4">
        {[1, 2, 3].map((i) => (
          <View key={i} className="rounded-xl bg-cream-100 p-4 dark:bg-night-700">
            <View className="flex-row items-center gap-3">
              <View className="h-10 w-10 items-center justify-center rounded-full bg-cream-200 dark:bg-night-600">
                <Text className="text-sm">👤</Text>
              </View>
              <View className="flex-1">
                <Text className="text-sm font-semibold text-cream-900 dark:text-night-50">
                  Profile Item {i}
                </Text>
                <Text className="text-xs text-cream-600 dark:text-cream-700">
                  Sample content for the profile tab
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
