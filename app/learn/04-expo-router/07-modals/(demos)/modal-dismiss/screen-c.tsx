import { View, Text, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '@/components/ui/button';

export default function ScreenC() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-cream-50 dark:bg-night-800" contentContainerClassName="gap-4 p-4 pb-8">
      <View className="items-center gap-2 rounded-xs bg-primary-50 p-4 dark:bg-primary-900/20">
        <Text className="text-3xl">📸</Text>
        <Text className="text-xs text-cream-600">modal · Stack depth: 4</Text>
      </View>
      <Button label="router.back() → back to B" variant="outline" onPress={() => router.back()} />
      <Button label="router.dismiss(2) → back to A" variant="warning" onPress={() => router.dismiss(2)} />
      <Button label="router.dismissAll() → back to Home" variant="danger" onPress={() => router.dismissAll()} />
    </ScrollView>
  );
}
