import { View, Text, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '@/components/ui/button';

export default function ModalDismissIndex() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-cream-50 dark:bg-night-800" contentContainerClassName="gap-4 p-4 pb-8">
      <View className="items-center gap-2 rounded-xl bg-primary-50 p-4 dark:bg-primary-900/20">
        <Text className="text-3xl">🏠</Text>
        <Text className="text-xs text-cream-600">Stack depth: 1</Text>
      </View>

      <Button label="Open Modal A" onPress={() => router.push('/learn/04-expo-router/07-modals/modal-dismiss/screen-a' as any)} />

      <View className="rounded-xl bg-secondary-50 p-4 dark:bg-secondary-900/20">
        <Text className="mb-1 text-xs font-semibold text-secondary-700 dark:text-secondary-300">Expo Router code</Text>
        <Text className="font-mono text-xs leading-5 text-secondary-600 dark:text-secondary-400">
          {'import { router } from "expo-router"\n\n// Go back one screen\nrouter.back()\n\n// Dismiss current modal\nrouter.dismiss()\n\n// Dismiss top N screens\nrouter.dismiss(2)\n\n// Dismiss all to root\nrouter.dismissAll()'}
        </Text>
      </View>
    </ScrollView>
  );
}
