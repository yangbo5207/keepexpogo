import { View, Text, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '@/components/ui/button';

export default function NavReplaceHome() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-cream-50 dark:bg-night-800" contentContainerClassName="items-center gap-4 p-6 pb-8">
      <Text className="text-4xl">🏠</Text>
      <Text className="text-center text-sm text-cream-700 dark:text-night-200">
        Use push to navigate deeper into the app.
      </Text>
      <Button label="router.push('/detail')" onPress={() => router.push('/learn/04-expo-router/06-navigation-api/nav-replace/detail' as any)} />
    </ScrollView>
  );
}
