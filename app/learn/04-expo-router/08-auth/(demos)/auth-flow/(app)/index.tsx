import { View, Text, ScrollView } from 'react-native';
import { useAuth } from '../_context';

export default function AuthAppHome() {
  const { user } = useAuth();

  return (
    <ScrollView className="flex-1 bg-cream-50 dark:bg-night-800" contentContainerClassName="gap-4 p-4 pb-8">
      <View className="flex-row items-center gap-2 rounded-lg bg-success-50 px-3 py-2 dark:bg-success-900/20">
        <Text className="text-xs">✅</Text>
        <Text className="font-mono text-xs text-success-600 dark:text-success-400">(app) group — authenticated</Text>
      </View>
      <View className="items-center gap-3 pt-4">
        <Text className="text-3xl">🏠</Text>
        <Text className="text-sm text-cream-700 dark:text-night-200">You are now authenticated.</Text>
      </View>
    </ScrollView>
  );
}
