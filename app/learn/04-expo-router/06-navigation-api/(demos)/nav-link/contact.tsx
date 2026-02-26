import { View, Text } from 'react-native';

export default function NavLinkContact() {
  return (
    <View className="flex-1 items-center justify-center gap-4 bg-cream-50 p-6 dark:bg-night-800">
      <Text className="text-4xl">✉️</Text>
      <Text className="text-sm text-cream-700 dark:text-night-200">This is the Contact page.</Text>
    </View>
  );
}
