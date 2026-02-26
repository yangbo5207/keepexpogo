import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '@/components/ui/button';

export default function CrossCreateStory() {
  const router = useRouter();

  return (
    <Pressable onPress={() => router.back()} className="flex-1 justify-end bg-black/60 p-4 pb-8">
      <View className="rounded-2xl bg-cream-50 p-6 dark:bg-night-700">
        <View className="flex-row items-center justify-between">
          <Pressable onPress={() => router.back()}>
            <Text className="text-lg text-cream-600">✕</Text>
          </Pressable>
        </View>
        <Text className="mt-2 text-sm text-cream-700 dark:text-night-200">Transparent modal from Root Stack</Text>
        <View className="mt-4 h-32 items-center justify-center rounded-xl bg-cream-200 dark:bg-night-600">
          <Text className="text-4xl">📸</Text>
        </View>
        <Button className="mt-4" label="Post Story" variant="success" onPress={() => router.back()} />
      </View>
    </Pressable>
  );
}
