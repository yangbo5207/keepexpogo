import { View, Text, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '@/components/ui/button';

export default function NavReplaceDetail() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-cream-50 dark:bg-night-800" contentContainerClassName="items-center gap-4 p-6 pb-8">
      <Text className="text-4xl">📦</Text>
      <Button label="router.back()" variant="outline" onPress={() => router.back()} />
    </ScrollView>
  );
}
