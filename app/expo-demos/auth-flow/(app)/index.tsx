import { View, Text, ScrollView } from 'react-native';
import { useAuth } from '../_context';

export default function AuthAppHome() {
  const { user } = useAuth();

  return (
    <ScrollView className="flex-1 bg-white dark:bg-[#151718]" contentContainerClassName="gap-4 p-4 pb-8">
      <View className="flex-row items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 dark:bg-emerald-900/20">
        <Text className="text-xs">✅</Text>
        <Text className="font-mono text-xs text-emerald-600 dark:text-emerald-400">(app) group — authenticated</Text>
      </View>
      <View className="items-center gap-3 pt-4">
        <Text className="text-3xl">🏠</Text>
        <Text className="text-xl font-bold text-gray-800 dark:text-gray-100">Welcome, {user?.name}!</Text>
        <Text className="text-sm text-gray-500 dark:text-gray-400">You are now authenticated.</Text>
      </View>
    </ScrollView>
  );
}
