import { View, Text, Pressable, ScrollView } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';

export default function DrawerBasicHome() {
  const navigation = useNavigation();

  return (
    <ScrollView className="flex-1 bg-white dark:bg-[#151718]" contentContainerClassName="items-center justify-center gap-4 p-6">
      <View className="h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100 dark:bg-indigo-900/30">
        <Text className="text-3xl">🏠</Text>
      </View>
      <Text className="text-xl font-bold text-gray-800 dark:text-gray-100">Home</Text>
      <Text className="text-center text-sm text-gray-500 dark:text-gray-400">
        Main dashboard and feed content.
      </Text>
      <Pressable
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        className="mt-4 rounded-lg bg-indigo-500 px-6 py-3 active:bg-indigo-600"
      >
        <Text className="font-semibold text-white">Open Drawer</Text>
      </Pressable>

      <View className="mt-4 w-full rounded-xl bg-indigo-50 p-4 dark:bg-indigo-900/20">
        <Text className="mb-1 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
          Expo Router file structure
        </Text>
        <Text className="font-mono text-xs leading-5 text-indigo-600 dark:text-indigo-400">
          {'app/\n├── _layout.tsx   ← <Drawer> navigator\n├── index.tsx     ← Home\n├── explore.tsx   ← Explore\n└── settings.tsx  ← Settings'}
        </Text>
      </View>
    </ScrollView>
  );
}
