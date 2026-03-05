import { View, Text, ScrollView } from 'react-native';

export default function NestDetail() {
  return (
    <ScrollView className="flex-1 bg-cream-50 dark:bg-night-800" contentContainerClassName="items-center justify-center gap-4 p-6">
      <Text className="text-3xl">📄</Text>
      <Text className="text-center text-sm text-cream-700 dark:text-night-200">This screen is in the root Stack — tab bar is hidden.</Text>
      <View className="w-full rounded-xs bg-secondary-50 p-4 dark:bg-secondary-900/20">
        <Text className="mb-1 text-xs font-semibold text-secondary-700 dark:text-secondary-300">File structure</Text>
        <Text className="font-mono text-xs leading-5 text-secondary-600 dark:text-secondary-400">
          {'app/\n├── _layout.tsx       ← Root Stack\n├── (tabs)/\n│   ├── _layout.tsx   ← Tabs\n│   ├── index.tsx\n│   └── profile.tsx\n└── detail.tsx        ← No tab bar!'}
        </Text>
      </View>
    </ScrollView>
  );
}
