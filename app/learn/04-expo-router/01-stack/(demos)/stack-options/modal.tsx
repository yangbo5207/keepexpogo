import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '@/components/ui/button';

export default function ScreenOptionsModal() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-black/50 p-6">
      <View className="w-full rounded-2xl bg-cream-50 p-6 dark:bg-night-700">
        <Text className="mt-2 text-sm text-cream-700 dark:text-night-200">
          This screen overrides screenOptions with its own{'\n'}
          <Text className="font-mono text-primary-600 dark:text-primary-400">
            options={'{{ headerShown: false }}'}
          </Text>
        </Text>
        <Button className="mt-4" label="Dismiss" variant="outline" onPress={() => router.back()} />
      </View>
    </View>
  );
}
