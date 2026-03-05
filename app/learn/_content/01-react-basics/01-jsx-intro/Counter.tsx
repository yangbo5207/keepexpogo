import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <View className="flex-1 items-center justify-center p-4">
      <Text className="text-4xl font-bold text-cream-900 dark:text-night-50">
        {count}
      </Text>
      <View className="mt-4 flex-row gap-3">
        <Pressable
          className="rounded-xs bg-blue-500 px-6 py-3 active:bg-blue-600"
          onPress={() => setCount(c => c + 1)}>
          <Text className="text-base font-semibold text-cream-50">+1</Text>
        </Pressable>
        <Pressable
          className="rounded-xs bg-red-500 px-6 py-3 active:bg-red-600"
          onPress={() => setCount(c => c - 1)}>
          <Text className="text-base font-semibold text-cream-50">-1</Text>
        </Pressable>
        <Pressable
          className="rounded-xs bg-cream-400 px-6 py-3 active:bg-night-400"
          onPress={() => setCount(0)}>
          <Text className="text-base font-semibold text-cream-50">Reset</Text>
        </Pressable>
      </View>
    </View>
  );
}
