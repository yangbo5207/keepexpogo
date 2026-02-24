import { View, Text, Pressable, ScrollView } from 'react-native';
import { useAuth } from '../_context';

export default function AuthAppProfile() {
  const { user, signOut } = useAuth();

  return (
    <ScrollView className="flex-1 bg-white dark:bg-[#151718]" contentContainerClassName="gap-4 p-4 pb-8">
      <View className="items-center gap-3 pt-4">
        <Text className="text-3xl">👤</Text>
        <Text className="text-xl font-bold text-gray-800 dark:text-gray-100">{user?.name}</Text>
        <Text className="text-sm text-gray-500 dark:text-gray-400">{user?.email}</Text>
      </View>
      <Pressable onPress={signOut} className="items-center rounded-xl bg-red-100 py-3 active:bg-red-200 dark:bg-red-900/30">
        <Text className="font-semibold text-red-600 dark:text-red-400">Sign Out</Text>
      </Pressable>
    </ScrollView>
  );
}
