import { View, Text, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '@/components/ui/button';

export default function StackBasicSubDetail() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-cream-50 dark:bg-night-800" contentContainerClassName="flex-1 items-center justify-center p-6">
      <View className="items-center gap-4">
        <View className="h-16 w-16 items-center justify-center rounded-2xl bg-warning-100 dark:bg-warning-900/30">
          <Text className="text-2xl">📑</Text>
        </View>
        <Text className="text-center text-sm text-cream-700 dark:text-night-200">
          Deepest screen in the stack.{'\n'}
          <Text className="font-mono text-primary-600 dark:text-primary-400">app/subdetail.tsx</Text>
        </Text>
        <Button className="mt-2" label="← Pop Back" variant="outline" onPress={() => router.back()} />
      </View>
    </ScrollView>
  );
}
