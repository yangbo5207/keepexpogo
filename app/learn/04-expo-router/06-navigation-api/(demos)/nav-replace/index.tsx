import { View, Text, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '@/components/ui/button';

export default function NavReplaceIndex() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-cream-50 dark:bg-night-800" contentContainerClassName="items-center gap-4 p-6 pb-8">
      <Text className="text-4xl">🌀</Text>
      <Text className="text-center text-sm text-cream-700 dark:text-night-200">
        After splash, use replace to go to Login (removes Splash from stack).
      </Text>
      <Button label="router.replace('/login')" onPress={() => router.replace('/learn/04-expo-router/06-navigation-api/nav-replace/login' as any)} />

      <View className="w-full rounded-xl bg-secondary-50 p-4 dark:bg-secondary-900/20">
        <Text className="mb-1 text-xs font-semibold text-secondary-700 dark:text-secondary-300">Expo Router code</Text>
        <Text className="font-mono text-xs leading-5 text-secondary-600 dark:text-secondary-400">
          {'// Replace: swap current screen\nrouter.replace("/home")\n\n// Common pattern: login → home\n// After auth, replace so user\n// can\'t navigate back to login'}
        </Text>
      </View>
    </ScrollView>
  );
}
