import { Pressable, Text } from 'react-native';
import { useRouter } from 'expo-router';

export function DemoCloseButton() {
  const router = useRouter();
  return (
    <Pressable
      onPress={() => router.back()}
      hitSlop={8}
      className="rounded-xs bg-cream-300/70 px-2.5 py-1 active:bg-cream-400/80 dark:bg-night-500/70 dark:active:bg-night-400/80"
    >
      <Text className="text-sm font-medium text-cream-700 dark:text-night-200">Close</Text>
    </Pressable>
  );
}
