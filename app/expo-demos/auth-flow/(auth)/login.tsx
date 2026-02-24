import { View, Text, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../_context';
import { DemoCloseButton } from '@/components/demo-close-button';

export default function AuthLogin() {
  const { signIn } = useAuth();
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-white dark:bg-[#151718]" contentContainerClassName="gap-4 p-4 pb-8">
      <View className="flex-row items-center gap-2 rounded-lg bg-amber-50 px-3 py-2 dark:bg-amber-900/20">
        <Text className="text-xs">🔒</Text>
        <Text className="flex-1 font-mono text-xs text-amber-600 dark:text-amber-400">(auth) group — not logged in</Text>
        <DemoCloseButton />
      </View>

      <View className="items-center gap-2 pt-4">
        <Text className="text-3xl">🔑</Text>
        <Text className="text-xl font-bold text-gray-800 dark:text-gray-100">Sign In</Text>
      </View>

      <Pressable onPress={() => signIn('Alice')} className="flex-row items-center gap-3 rounded-xl bg-gray-50 p-4 active:bg-gray-100 dark:bg-gray-800">
        <Text className="text-2xl">👩</Text>
        <View className="flex-1">
          <Text className="text-sm font-semibold text-gray-800 dark:text-gray-100">Sign in as Alice</Text>
          <Text className="text-xs text-gray-400">Tap to authenticate</Text>
        </View>
        <Text className="text-gray-400">→</Text>
      </Pressable>

      <Pressable onPress={() => signIn('Bob')} className="flex-row items-center gap-3 rounded-xl bg-gray-50 p-4 active:bg-gray-100 dark:bg-gray-800">
        <Text className="text-2xl">👨</Text>
        <View className="flex-1">
          <Text className="text-sm font-semibold text-gray-800 dark:text-gray-100">Sign in as Bob</Text>
          <Text className="text-xs text-gray-400">Tap to authenticate</Text>
        </View>
        <Text className="text-gray-400">→</Text>
      </Pressable>

      <Pressable onPress={() => router.push('/expo-demos/auth-flow/(auth)/register' as any)} className="items-center py-2">
        <Text className="text-sm text-indigo-600 dark:text-indigo-400">Don't have an account? Register</Text>
      </Pressable>

      <View className="rounded-xl bg-indigo-50 p-4 dark:bg-indigo-900/20">
        <Text className="mb-1 text-xs font-semibold text-indigo-700 dark:text-indigo-300">Root layout redirect</Text>
        <Text className="font-mono text-xs leading-5 text-indigo-600 dark:text-indigo-400">
          {'// app/_layout.tsx\nconst { session, isLoading } = useAuth()\n\nif (isLoading) return <SplashScreen />\n\nif (!session) {\n  return <Redirect href="/login" />\n}\nreturn <Stack />  // → (app) group'}
        </Text>
      </View>
    </ScrollView>
  );
}
