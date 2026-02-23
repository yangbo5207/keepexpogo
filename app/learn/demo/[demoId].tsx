import React, { Suspense } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';

import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { getDemoById } from '@/content/learn';

export default function DemoScreen() {
  const { demoId } = useLocalSearchParams<{ demoId: string }>();
  const theme = useColorScheme() ?? 'light';
  const demo = getDemoById(demoId);

  if (!demo) {
    return (
      <View className="flex-1 items-center justify-center bg-white dark:bg-[#151718]">
        <Stack.Screen options={{ title: 'Not Found' }} />
        <Text className="text-gray-900 dark:text-gray-100">Demo not found.</Text>
      </View>
    );
  }

  const DemoComponent = React.lazy(demo.component);

  return (
    <View className="flex-1 bg-white dark:bg-[#151718]">
      <Stack.Screen options={{ title: demo.title }} />
      <Suspense
        fallback={
          <View className="flex-1 items-center justify-center gap-3">
            <ActivityIndicator size="large" color={Colors[theme].tint} />
            <Text className="text-sm text-gray-500 dark:text-gray-400">
              Loading demo...
            </Text>
          </View>
        }>
        <DemoComponent />
      </Suspense>
    </View>
  );
}
