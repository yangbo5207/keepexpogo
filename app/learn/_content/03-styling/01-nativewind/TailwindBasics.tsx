import React from 'react';
import { View, Text } from 'react-native';

export default function TailwindBasics() {
  return (
    <View className="flex-1 gap-4 p-4">
      <Text className="text-xl font-bold text-cream-900 dark:text-night-50">
        NativeWind / Tailwind Basics
      </Text>

      <View className="rounded-xs bg-gradient-to-r from-blue-500 to-purple-500 p-4">
        <Text className="text-lg font-bold text-cream-50">Gradient Card</Text>
        <Text className="mt-1 text-blue-100">Using className for styling</Text>
      </View>

      <View className="flex-row gap-3">
        <View className="flex-1 rounded-xs bg-red-100 p-3 dark:bg-red-900/30">
          <Text className="font-semibold text-red-700 dark:text-red-300">Red</Text>
        </View>
        <View className="flex-1 rounded-xs bg-green-100 p-3 dark:bg-green-900/30">
          <Text className="font-semibold text-green-700 dark:text-green-300">Green</Text>
        </View>
        <View className="flex-1 rounded-xs bg-blue-100 p-3 dark:bg-blue-900/30">
          <Text className="font-semibold text-blue-700 dark:text-blue-300">Blue</Text>
        </View>
      </View>

      <View className="rounded-xs border-2 border-dashed border-cream-300 p-4 dark:border-night-500">
        <Text className="text-center text-cream-600 dark:text-night-300">
          Dashed border using Tailwind classes
        </Text>
      </View>
    </View>
  );
}
