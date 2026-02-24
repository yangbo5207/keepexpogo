import { View, Text, ScrollView } from 'react-native';
import { useProtectedAuth } from '../_context';

export default function ProtectedUsers() {
  const { session } = useProtectedAuth();
  const hasAccess = session?.role === 'admin';

  if (!hasAccess) {
    return (
      <View className="flex-1 items-center justify-center gap-4 bg-white p-6 dark:bg-[#151718]">
        <Text className="text-5xl">🚫</Text>
        <Text className="text-lg font-bold text-gray-800 dark:text-gray-100">Access Denied</Text>
        <Text className="text-center text-sm text-gray-500 dark:text-gray-400">
          Your role ({session?.role}) doesn't have permission to access Users.
        </Text>
        <View className="w-full rounded-xl bg-red-50 p-4 dark:bg-red-900/20">
          <Text className="font-mono text-xs leading-5 text-red-600 dark:text-red-400">
            {'// Role-based redirect\nif (session.role !== "admin") {\n  return <Redirect href="/denied" />\n}'}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-white dark:bg-[#151718]" contentContainerClassName="gap-4 p-4 pb-8">
      <View className="items-center gap-3 pt-4">
        <Text className="text-3xl">👥</Text>
        <Text className="text-xl font-bold text-gray-800 dark:text-gray-100">User Management</Text>
      </View>
      {['Total users: 1,234', 'Active today: 456', 'Pending review: 12'].map((item, i) => (
        <View key={i} className="flex-row items-center justify-between rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
          <Text className="text-sm text-gray-600 dark:text-gray-300">{item.split(':')[0]}</Text>
          <Text className="font-semibold text-gray-800 dark:text-gray-100">{item.split(':')[1]}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
