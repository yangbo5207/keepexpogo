import React, { useState } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';

export default function PressableStates() {
  const [inputValue, setInputValue] = useState('');

  return (
    <View className="flex-1 gap-5 p-4">
      <Text className="text-xl font-bold text-gray-800 dark:text-gray-100">
        Pressable States
      </Text>

      {/* active: 状态演示 */}
      <View>
        <Text className="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
          active: 按下状态
        </Text>
        <View className="gap-3">
          <Pressable className="items-center rounded-lg bg-blue-500 py-3 active:bg-blue-700">
            <Text className="text-base font-semibold text-white">
              按下试试 (active:bg-blue-700)
            </Text>
          </Pressable>

          <Pressable className="items-center rounded-lg bg-emerald-500 py-3 active:bg-emerald-700 active:opacity-80">
            <Text className="text-base font-semibold text-white">
              按下变透明 (active:opacity-80)
            </Text>
          </Pressable>

          <Pressable className="items-center rounded-lg border-2 border-violet-500 bg-transparent py-3 active:bg-violet-500">
            <Text className="text-base font-semibold text-violet-500 active:text-white">
              按下填充 (active:bg-violet-500)
            </Text>
          </Pressable>
        </View>
      </View>

      {/* focus: 状态演示 */}
      <View>
        <Text className="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
          focus: 聚焦状态 (TextInput)
        </Text>
        <View className="gap-3">
          <TextInput
            className="rounded-lg border-2 border-gray-300 px-4 py-3 text-base text-gray-800 focus:border-blue-500 dark:border-gray-600 dark:text-gray-100 dark:focus:border-blue-400"
            placeholder="点击聚焦，边框变蓝"
            placeholderTextColor="#9ca3af"
            value={inputValue}
            onChangeText={setInputValue}
          />

          <TextInput
            className="rounded-lg border-2 border-gray-300 bg-gray-50 px-4 py-3 text-base text-gray-800 focus:border-emerald-500 focus:bg-white dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-emerald-400 dark:focus:bg-gray-700"
            placeholder="聚焦时背景色也会变化"
            placeholderTextColor="#9ca3af"
          />
        </View>
      </View>

      {/* 组合状态 */}
      <View>
        <Text className="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
          组合使用
        </Text>
        <View className="flex-row gap-3">
          <Pressable className="flex-1 items-center rounded-full bg-rose-500 py-3 active:bg-rose-700">
            <Text className="text-sm font-bold text-white">Delete</Text>
          </Pressable>
          <Pressable className="flex-1 items-center rounded-full bg-gray-200 py-3 active:bg-gray-300 dark:bg-gray-700 dark:active:bg-gray-600">
            <Text className="text-sm font-bold text-gray-700 dark:text-gray-200">Cancel</Text>
          </Pressable>
          <Pressable className="flex-1 items-center rounded-full bg-blue-500 py-3 active:bg-blue-700">
            <Text className="text-sm font-bold text-white">Confirm</Text>
          </Pressable>
        </View>
      </View>

      <View className="rounded-lg bg-amber-50 p-3 dark:bg-amber-900/20">
        <Text className="text-sm text-amber-800 dark:text-amber-200">
          注意：hover: 变体在原生端不生效（移动设备没有 hover 事件），仅在 Web 端有效。原生端使用 active: 代替。
        </Text>
      </View>
    </View>
  );
}
