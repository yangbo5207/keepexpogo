import { View, Text, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function NavReplaceIndex() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-white dark:bg-[#151718]" contentContainerClassName="items-center gap-4 p-6 pb-8">
      <Text className="text-4xl">🌀</Text>
      <Text className="text-lg font-bold text-gray-800 dark:text-gray-100">App Loading...</Text>
      <Text className="text-center text-sm text-gray-500 dark:text-gray-400">
        After splash, use replace to go to Login (removes Splash from stack).
      </Text>
      <Pressable onPress={() => router.replace('/expo-demos/nav-replace/login' as any)} className="w-full items-center rounded-xl bg-indigo-500 py-3 active:bg-indigo-600">
        <Text className="font-semibold text-white">router.replace('/login')</Text>
      </Pressable>

      <View className="w-full rounded-xl bg-teal-50 p-4 dark:bg-teal-900/20">
        <Text className="mb-1 text-xs font-semibold text-teal-700 dark:text-teal-300">Expo Router code</Text>
        <Text className="font-mono text-xs leading-5 text-teal-600 dark:text-teal-400">
          {'// Replace: swap current screen\nrouter.replace("/home")\n\n// Common pattern: login → home\n// After auth, replace so user\n// can\'t navigate back to login'}
        </Text>
      </View>
    </ScrollView>
  );
}
