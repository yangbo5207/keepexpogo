import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '@/components/ui/button';

export default function TransparentBottomDrawer() {
  const router = useRouter();

  return (
    <Pressable onPress={() => router.back()} className="flex-1 justify-end bg-black/40">
      <Pressable onPress={() => {}} className="rounded-t-3xl bg-cream-50 pb-8 dark:bg-night-700">
        <View className="items-center py-3">
          <View className="h-1 w-10 rounded-full bg-cream-400 dark:bg-night-500" />
        </View>
        <View className="gap-4 px-5">
          <View className="flex-row items-center justify-between">
            <Pressable onPress={() => router.back()}>
              <Text className="text-lg text-cream-600">✕</Text>
            </Pressable>
          </View>
          {['Dark Mode', 'Notifications', 'Sound Effects'].map((item) => (
            <View key={item} className="flex-row items-center justify-between rounded-xl bg-cream-100 px-4 py-3 dark:bg-night-600">
              <Text className="text-sm text-cream-800 dark:text-cream-400">{item}</Text>
              <View className="h-6 w-10 items-end justify-center rounded-full bg-primary-500 px-0.5">
                <View className="h-5 w-5 rounded-full bg-cream-50" />
              </View>
            </View>
          ))}
          <Button label="Done" onPress={() => router.back()} />
        </View>
      </Pressable>
    </Pressable>
  );
}
