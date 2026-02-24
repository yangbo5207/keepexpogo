import { View, Text, Pressable, ScrollView } from 'react-native';
import { useAuth } from '../_context';

export default function AuthRegister() {
  const { signIn } = useAuth();

  return (
    <ScrollView className="flex-1 bg-white dark:bg-[#151718]" contentContainerClassName="items-center gap-4 p-6 pb-8">
      <Text className="text-3xl">📝</Text>
      <Text className="text-xl font-bold text-gray-800 dark:text-gray-100">Register</Text>
      <Text className="text-center text-sm text-gray-500 dark:text-gray-400">Create a new account to get started.</Text>
      <Pressable onPress={() => signIn('NewUser')} className="w-full items-center rounded-xl bg-indigo-500 py-3 active:bg-indigo-600">
        <Text className="font-semibold text-white">Create Account</Text>
      </Pressable>
    </ScrollView>
  );
}
