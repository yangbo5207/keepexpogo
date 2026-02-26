import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '@/components/ui/button';

export default function TransparentAlert() {
  const router = useRouter();

  return (
    <Pressable onPress={() => router.back()} className="flex-1 items-center justify-center bg-black/50">
      <Pressable onPress={() => {}} className="mx-8 w-72 rounded-2xl bg-cream-50 p-6 dark:bg-night-700">
        <View className="items-center gap-3">
          <Text className="text-3xl">⚠️</Text>
          <Text className="text-center text-sm text-cream-700 dark:text-night-200">Are you sure you want to delete this item? This action cannot be undone.</Text>
        </View>
        <View className="mt-5 gap-2">
          <Button label="Delete" variant="danger" onPress={() => router.back()} />
          <Button label="Cancel" variant="outline" onPress={() => router.back()} />
        </View>
      </Pressable>
    </Pressable>
  );
}
