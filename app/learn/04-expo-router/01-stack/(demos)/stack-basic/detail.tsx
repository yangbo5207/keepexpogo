import { View, Text, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '@/components/ui/button';

export default function StackBasicDetail() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-cream-50 dark:bg-night-800" contentContainerClassName="flex-1 items-center justify-center p-6">
      <View className="items-center gap-4">
        <View className="h-16 w-16 items-center justify-center rounded-2xl bg-success-100 dark:bg-success-900/30">
          <Text className="text-2xl">📄</Text>
        </View>
        <Text className="text-center text-sm text-cream-700 dark:text-night-200">
          Pushed onto the stack.{'\n'}
          <Text className="font-mono text-primary-600 dark:text-primary-400">app/detail.tsx</Text>
        </Text>
        <View className="flex-row gap-3">
          <Button className="flex-1" label="← Pop" variant="outline" onPress={() => router.back()} />
          <Button className="flex-1" label="Push → SubDetail" variant="success" onPress={() => router.push('/learn/04-expo-router/01-stack/stack-basic/sub-detail')} />
        </View>
      </View>
    </ScrollView>
  );
}
