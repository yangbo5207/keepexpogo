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
      <Text className="text-xl font-bold text-cream-900 dark:text-night-50">
        State Demo - Todo List
      </Text>
      <View className="mt-4 flex-row gap-2">
        <TextInput
          className="flex-1 rounded-xs border border-cream-300 px-3 py-2 text-cream-800 dark:border-night-500 dark:text-night-50"
          value={text}
          onChangeText={setText}
          placeholder="Add an item..."
          placeholderTextColor="#9CA3AF"
        />
        <Pressable
          className="rounded-xs bg-green-500 px-4 py-2 active:bg-green-600"
          onPress={addItem}>
          <Text className="font-semibold text-cream-50">Add</Text>
        </Pressable>
      </View>
      <View className="mt-4 gap-2">
        {items.map((item, index) => (
          <View
            key={index}
            className="rounded-xs bg-cream-100 px-4 py-3 dark:bg-night-700">
            <Text className="text-cream-700 dark:text-night-200">{item}</Text>
          </View>
        ))}
        {items.length === 0 && (
          <Text className="text-center text-cream-400">No items yet. Add one above!</Text>
        )}
      </View>
    </View>
  );
}
