import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

export default function BasicStack() {
  const [screen, setScreen] = useState<'home' | 'detail'>('home');

  if (screen === 'detail') {
    return (
      <View className="flex-1 p-4">
        <Pressable onPress={() => setScreen('home')}>
          <Text className="text-base text-blue-500">&larr; Back</Text>
        </Pressable>
        <View className="mt-6 items-center">
          <Text className="text-xl font-bold text-gray-800 dark:text-gray-100">
            Detail Screen
          </Text>
          <Text className="mt-2 text-gray-500 dark:text-gray-400">
            This simulates a stack navigation push.
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View className="flex-1 items-center justify-center p-4">
      <Text className="text-xl font-bold text-gray-800 dark:text-gray-100">
        Home Screen
      </Text>
      <Pressable
        className="mt-4 rounded-lg bg-indigo-500 px-6 py-3 active:bg-indigo-600"
        onPress={() => setScreen('detail')}>
        <Text className="font-semibold text-white">Go to Detail</Text>
      </Pressable>
    </View>
  );
}
