import React from 'react';
import { View, Text } from 'react-native';

export default function HelloWorld() {
  return (
    <View className="flex-1 items-center justify-center p-4">
      <Text className="text-2xl font-bold text-blue-600 dark:text-blue-400">
        Hello, World!
      </Text>
      <Text className="mt-2 text-base text-gray-600 dark:text-gray-300">
        This is your first React Native component using JSX.
      </Text>
    </View>
  );
}
