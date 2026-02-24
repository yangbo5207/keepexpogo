import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function TransparentBottomDrawer() {
  const router = useRouter();

  return (
    <Pressable onPress={() => router.back()} className="flex-1 justify-end bg-black/40">
      <Pressable onPress={() => {}} className="rounded-t-3xl bg-white pb-8 dark:bg-gray-800">
        <View className="items-center py-3">
          <View className="h-1 w-10 rounded-full bg-gray-300 dark:bg-gray-600" />
        </View>
        <View className="gap-4 px-5">
          <View className="flex-row items-center justify-between">
            <Text className="text-lg font-bold text-gray-800 dark:text-gray-100">Quick Settings</Text>
            <Pressable onPress={() => router.back()}>
              <Text className="text-lg text-gray-400">✕</Text>
            </Pressable>
          </View>
          {['Dark Mode', 'Notifications', 'Sound Effects'].map((item) => (
            <View key={item} className="flex-row items-center justify-between rounded-xl bg-gray-50 px-4 py-3 dark:bg-gray-700">
              <Text className="text-sm text-gray-700 dark:text-gray-200">{item}</Text>
              <View className="h-6 w-10 items-end justify-center rounded-full bg-indigo-500 px-0.5">
                <View className="h-5 w-5 rounded-full bg-white" />
              </View>
            </View>
          ))}
          <Pressable onPress={() => router.back()} className="items-center rounded-xl bg-indigo-500 py-3 active:bg-indigo-600">
            <Text className="font-semibold text-white">Done</Text>
          </Pressable>
        </View>
      </Pressable>
    </Pressable>
  );
}
