import { View, Text, ScrollView } from 'react-native';
import { useAuth } from '../_context';
import { Button } from '@/components/ui/button';

export default function AuthRegister() {
  const { signIn } = useAuth();

  return (
    <ScrollView className="flex-1 bg-cream-50 dark:bg-night-800" contentContainerClassName="items-center gap-4 p-6 pb-8">
      <Text className="text-3xl">📝</Text>
      <Text className="text-center text-sm text-cream-700 dark:text-night-200">Create a new account to get started.</Text>
      <Button label="Create Account" onPress={() => signIn('NewUser')} />
    </ScrollView>
  );
}
