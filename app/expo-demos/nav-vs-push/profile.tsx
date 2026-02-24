import { View, Text } from 'react-native';

export default function NavProfile() {
  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-[#151718]">
      <Text className="text-3xl">👤</Text>
      <Text className="mt-2 text-xl font-bold text-gray-800 dark:text-gray-100">Profile</Text>
    </View>
  );
}
