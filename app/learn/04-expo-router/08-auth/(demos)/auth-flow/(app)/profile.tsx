import { View, Text, ScrollView } from 'react-native';
import { useAuth } from '../_context';
import { Button } from '@/components/ui/button';

export default function AuthAppProfile() {
  const { user, signOut } = useAuth();

  return (
    <ScrollView className="flex-1 bg-cream-50 dark:bg-night-800" contentContainerClassName="gap-4 p-4 pb-8">
      <View className="items-center gap-3 pt-4">
        <Text className="text-3xl">👤</Text>
        <Text className="text-sm text-cream-700 dark:text-night-200">{user?.email}</Text>
      </View>
      <Button className="py-3" label="Sign Out" variant="danger" onPress={signOut} />
    </ScrollView>
  );
}
