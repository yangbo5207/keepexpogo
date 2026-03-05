import { View, Text, ScrollView } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Button } from '@/components/ui/button';

export default function DrawerBasicHome() {
  const navigation = useNavigation();

  return (
    <ScrollView className="flex-1 bg-cream-50 dark:bg-night-800" contentContainerClassName="items-center justify-center gap-4 p-6">
      <View className="h-16 w-16 items-center justify-center rounded-xs bg-primary-100 dark:bg-primary-900/30">
        <Text className="text-3xl">🏠</Text>
      </View>
      <Text className="text-center text-sm text-cream-700 dark:text-night-200">
        Main dashboard and feed content.
      </Text>
      <Button className="mt-4" label="Open Drawer" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />

      <View className="mt-4 w-full rounded-xs bg-primary-50 p-4 dark:bg-primary-900/20">
        <Text className="mb-1 text-xs font-semibold text-primary-700 dark:text-primary-300">
          Expo Router file structure
        </Text>
        <Text className="font-mono text-xs leading-5 text-primary-600 dark:text-primary-400">
          {'app/\n├── _layout.tsx   ← <Drawer> navigator\n├── index.tsx     ← Home\n├── explore.tsx   ← Explore\n└── settings.tsx  ← Settings'}
        </Text>
      </View>
    </ScrollView>
  );
}
