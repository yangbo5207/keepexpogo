import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

export default function StateDemo() {
  const [text, setText] = useState('');
  const [items, setItems] = useState<string[]>([]);

  const addItem = () => {
    if (text.trim()) {
      setItems(prev => [...prev, text.trim()]);
      setText('');
    }
  };

  return (
    <View className="flex-1 p-4">
      <Text className="text-xl font-bold text-gray-800 dark:text-gray-100">
        State Demo - Todo List
      </Text>
      <View className="mt-4 flex-row gap-2">
        <TextInput
          className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-gray-800 dark:border-gray-600 dark:text-gray-100"
          value={text}
          onChangeText={setText}
          placeholder="Add an item..."
          placeholderTextColor="#9CA3AF"
        />
        <Pressable
          className="rounded-lg bg-green-500 px-4 py-2 active:bg-green-600"
          onPress={addItem}>
          <Text className="font-semibold text-white">Add</Text>
        </Pressable>
      </View>
      <View className="mt-4 gap-2">
        {items.map((item, index) => (
          <View
            key={index}
            className="rounded-lg bg-gray-100 px-4 py-3 dark:bg-gray-800">
            <Text className="text-gray-700 dark:text-gray-200">{item}</Text>
          </View>
        ))}
        {items.length === 0 && (
          <Text className="text-center text-gray-400">No items yet. Add one above!</Text>
        )}
      </View>
    </View>
  );
}
