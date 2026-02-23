import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <View className="flex-1 items-center justify-center p-4">
      <Text className="text-4xl font-bold text-gray-800 dark:text-gray-100">
        {count}
      </Text>
      <View className="mt-4 flex-row gap-3">
        <Pressable
          className="rounded-lg bg-blue-500 px-6 py-3 active:bg-blue-600"
          onPress={() => setCount(c => c + 1)}>
          <Text className="text-base font-semibold text-white">+1</Text>
        </Pressable>
        <Pressable
          className="rounded-lg bg-red-500 px-6 py-3 active:bg-red-600"
          onPress={() => setCount(c => c - 1)}>
          <Text className="text-base font-semibold text-white">-1</Text>
        </Pressable>
        <Pressable
          className="rounded-lg bg-gray-400 px-6 py-3 active:bg-gray-500"
          onPress={() => setCount(0)}>
          <Text className="text-base font-semibold text-white">Reset</Text>
        </Pressable>
      </View>
    </View>
  );
}
