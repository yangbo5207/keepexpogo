import { View, Text, ScrollView } from 'react-native';
import { useProtectedAuth } from '../_context';

export default function ProtectedAnalytics() {
  const { session } = useProtectedAuth();
  const hasAccess = session?.role === 'admin' || session?.role === 'user';

  if (!hasAccess) {
    return (
      <View className="flex-1 items-center justify-center gap-4 bg-cream-50 p-6 dark:bg-night-800">
        <Text className="text-5xl">🚫</Text>
        <Text className="text-center text-sm text-cream-700 dark:text-night-200">
          Your role ({session?.role}) doesn't have permission to access Analytics.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-cream-50 dark:bg-night-800" contentContainerClassName="gap-4 p-4 pb-8">
      <View className="items-center gap-3 pt-4">
        <Text className="text-3xl">📈</Text>
      </View>
      {['Page views: 15.2K', 'Bounce rate: 32%', 'Avg session: 4m 23s'].map((item, i) => (
        <View key={i} className="flex-row items-center justify-between rounded-xl bg-cream-100 p-4 dark:bg-night-700">
          <Text className="text-sm text-cream-700 dark:text-night-200">{item.split(':')[0]}</Text>
          <Text className="font-semibold text-cream-900 dark:text-night-50">{item.split(':')[1]}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
