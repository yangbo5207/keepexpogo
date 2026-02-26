import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '@/components/ui/button';

export default function CrossNewPost() {
  const router = useRouter();
  return (
    <View className="flex-1 items-center justify-center gap-4 bg-cream-50 p-6 dark:bg-night-800">
      <Text className="text-4xl">📝</Text>
      <Text className="text-center text-sm text-cream-700 dark:text-night-200">Modal presented from Root Stack (above tabs)</Text>
      <Button label="Dismiss" variant="outline" onPress={() => router.back()} />
    </View>
  );
}
