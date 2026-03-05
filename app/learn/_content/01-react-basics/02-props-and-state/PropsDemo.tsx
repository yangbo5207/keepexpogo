import React from 'react';
import { View, Text } from 'react-native';

function Greeting({ name, age }: { name: string; age: number }) {
  return (
    <View className="rounded-xs bg-blue-50 p-4 dark:bg-blue-900/30">
      <Text className="text-lg font-semibold text-cream-900 dark:text-night-50">
        Hello, {name}!
      </Text>
      <Text className="mt-1 text-sm text-cream-600 dark:text-night-300">
        Age: {age}
      </Text>
    </View>
  );
}

export default function PropsDemo() {
  return (
    <View className="flex-1 gap-3 p-4">
      <Text className="text-xl font-bold text-cream-900 dark:text-night-50">
        Props Demo
      </Text>
      <Greeting name="Alice" age={25} />
      <Greeting name="Bob" age={30} />
      <Greeting name="Charlie" age={22} />
    </View>
  );
}
