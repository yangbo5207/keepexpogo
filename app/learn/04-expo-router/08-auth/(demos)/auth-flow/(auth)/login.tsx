import { View, Text, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../_context';
import { DemoBackButton } from '@/components/demo-back-button';
import { Button } from '@/components/ui/button';
import { ListRow, ListRowGroup } from '@/components/ui/list-row';

export default function AuthLogin() {
  const { signIn } = useAuth();
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-cream-50 dark:bg-night-800" contentContainerClassName="gap-4 p-4 pb-8">
      <View className="flex-row items-center gap-2 rounded-lg bg-warning-50 px-3 py-2 dark:bg-warning-900/20">
        <Text className="text-xs">🔒</Text>
        <Text className="flex-1 font-mono text-xs text-warning-600 dark:text-warning-400">(auth) group — not logged in</Text>
        <DemoBackButton />
      </View>

      <View className="items-center gap-2 pt-4">
        <Text className="text-3xl">🔑</Text>
      </View>

      <ListRowGroup>
        <ListRow
          title="Sign in as Alice"
          description="Tap to authenticate"
          onPress={() => signIn('Alice')}
          left={<Text className="text-2xl">👩</Text>}
          right={<Text className="text-cream-600">→</Text>}
        />
        <ListRow
          title="Sign in as Bob"
          description="Tap to authenticate"
          onPress={() => signIn('Bob')}
          left={<Text className="text-2xl">👨</Text>}
          right={<Text className="text-cream-600">→</Text>}
        />
      </ListRowGroup>

      <Button className="py-2" label="Don't have an account? Register" variant="ghost" onPress={() => router.push('/learn/04-expo-router/08-auth/auth-flow/(auth)/register' as any)} />

      <View className="rounded-xl bg-primary-50 p-4 dark:bg-primary-900/20">
        <Text className="mb-1 text-xs font-semibold text-primary-700 dark:text-primary-300">Root layout redirect</Text>
        <Text className="font-mono text-xs leading-5 text-primary-600 dark:text-primary-400">
          {'// app/_layout.tsx\nconst { session, isLoading } = useAuth()\n\nif (isLoading) return <SplashScreen />\n\nif (!session) {\n  return <Redirect href="/login" />\n}\nreturn <Stack />  // → (app) group'}
        </Text>
      </View>
    </ScrollView>
  );
}
