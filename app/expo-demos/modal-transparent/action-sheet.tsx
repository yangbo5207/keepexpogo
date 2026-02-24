import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

const actions = [
  { label: 'Copy Link', emoji: '🔗' },
  { label: 'Share to Twitter', emoji: '🐦' },
  { label: 'Send via Message', emoji: '💬' },
  { label: 'Save to Bookmarks', emoji: '🔖' },
];

export default function TransparentActionSheet() {
  const router = useRouter();

  return (
    <Pressable onPress={() => router.back()} className="flex-1 justify-end bg-black/50">
      <View className="mx-3 mb-3 gap-2">
        <View className="overflow-hidden rounded-2xl bg-white dark:bg-gray-800">
          <View className="items-center border-b border-gray-100 px-4 py-3 dark:border-gray-700">
            <Text className="text-xs text-gray-400">Share Post</Text>
          </View>
          {actions.map((action, i) => (
            <Pressable key={action.label} onPress={() => router.back()} className={`flex-row items-center gap-3 px-4 py-3.5 active:bg-gray-50 dark:active:bg-gray-700 ${i < actions.length - 1 ? 'border-b border-gray-100 dark:border-gray-700' : ''}`}>
              <Text className="text-base">{action.emoji}</Text>
              <Text className="text-sm font-medium text-gray-800 dark:text-gray-100">{action.label}</Text>
            </Pressable>
          ))}
        </View>
        <Pressable onPress={() => router.back()} className="items-center rounded-2xl bg-white py-3.5 active:bg-gray-50 dark:bg-gray-800">
          <Text className="font-semibold text-red-500">Cancel</Text>
        </Pressable>
      </View>
    </Pressable>
  );
}
