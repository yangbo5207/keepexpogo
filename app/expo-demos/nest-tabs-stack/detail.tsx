import { View, Text, ScrollView } from 'react-native';

export default function NestDetail() {
  return (
    <ScrollView className="flex-1 bg-white dark:bg-[#151718]" contentContainerClassName="items-center justify-center gap-4 p-6">
      <Text className="text-3xl">📄</Text>
      <Text className="text-lg font-bold text-gray-800 dark:text-gray-100">Post Detail</Text>
      <Text className="text-center text-sm text-gray-500 dark:text-gray-400">This screen is in the root Stack — tab bar is hidden.</Text>
      <View className="w-full rounded-xl bg-teal-50 p-4 dark:bg-teal-900/20">
        <Text className="mb-1 text-xs font-semibold text-teal-700 dark:text-teal-300">File structure</Text>
        <Text className="font-mono text-xs leading-5 text-teal-600 dark:text-teal-400">
          {'app/\n├── _layout.tsx       ← Root Stack\n├── (tabs)/\n│   ├── _layout.tsx   ← Tabs\n│   ├── index.tsx\n│   └── profile.tsx\n└── detail.tsx        ← No tab bar!'}
        </Text>
      </View>
    </ScrollView>
  );
}
