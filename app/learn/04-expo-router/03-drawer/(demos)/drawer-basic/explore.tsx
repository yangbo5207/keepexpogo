import { View, Text, ScrollView } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Button } from '@/components/ui/button';

export default function DrawerBasicExplore() {
  const navigation = useNavigation();

  return (
    <ScrollView className="flex-1 bg-cream-50 dark:bg-night-800" contentContainerClassName="items-center justify-center gap-4 p-6">
      <View className="h-16 w-16 items-center justify-center rounded-2xl bg-primary-100 dark:bg-primary-900/30">
        <Text className="text-3xl">🧭</Text>
      </View>
      <Text className="text-center text-sm text-cream-700 dark:text-night-200">
        Discover new content and trending topics.
      </Text>
      <Button className="mt-4" label="Open Drawer" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
    </ScrollView>
  );
}
