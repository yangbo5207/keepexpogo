import React from 'react';
import { View, Text } from 'react-native';

export default function TailwindBasics() {
  return (
    <View className="flex-1 gap-4 p-4">
      <Text className="text-xl font-bold text-gray-800 dark:text-gray-100">
        NativeWind / Tailwind Basics
      </Text>

      <View className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 p-4">
        <Text className="text-lg font-bold text-white">Gradient Card</Text>
        <Text className="mt-1 text-blue-100">Using className for styling</Text>
      </View>

      <View className="flex-row gap-3">
        <View className="flex-1 rounded-lg bg-red-100 p-3 dark:bg-red-900/30">
          <Text className="font-semibold text-red-700 dark:text-red-300">Red</Text>
        </View>
        <View className="flex-1 rounded-lg bg-green-100 p-3 dark:bg-green-900/30">
          <Text className="font-semibold text-green-700 dark:text-green-300">Green</Text>
        </View>
        <View className="flex-1 rounded-lg bg-blue-100 p-3 dark:bg-blue-900/30">
          <Text className="font-semibold text-blue-700 dark:text-blue-300">Blue</Text>
        </View>
      </View>

      <View className="rounded-lg border-2 border-dashed border-gray-300 p-4 dark:border-gray-600">
        <Text className="text-center text-gray-500 dark:text-gray-400">
          Dashed border using Tailwind classes
        </Text>
      </View>
    </View>
  );
}
