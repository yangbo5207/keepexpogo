import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '@/components/ui/button';

export default function CrossProfile() {
  const router = useRouter();
  return (
    <View className="flex-1 items-center justify-center gap-3 bg-cream-50 p-6 dark:bg-night-800">
      <Text className="text-3xl">👤</Text>
      <Button label="Open Modal" onPress={() => router.push('/learn/04-expo-router/04-nesting/nest-cross/new-post' as any)} />
    </View>
  );
}
