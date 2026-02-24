import { Pressable, Text } from 'react-native';
import { useRouter } from 'expo-router';

export function DemoCloseButton() {
  const router = useRouter();
  return (
    <Pressable
      onPress={() => router.back()}
      hitSlop={8}
      className="rounded-md bg-black/10 px-2.5 py-1 active:bg-black/20 dark:bg-white/10 dark:active:bg-white/20"
    >
      <Text className="text-sm font-medium text-gray-700 dark:text-gray-200">Close</Text>
    </Pressable>
  );
}
