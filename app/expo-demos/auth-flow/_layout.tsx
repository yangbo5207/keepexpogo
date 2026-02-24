import { Stack, Redirect } from 'expo-router';
import { View, Text, ActivityIndicator } from 'react-native';
import { AuthProvider, useAuth } from './_context';
import { DemoCloseButton } from '@/components/demo-close-button';

function AuthLayoutInner() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center bg-indigo-600 dark:bg-indigo-900">
        <Text className="text-5xl">🔐</Text>
        <Text className="mt-4 text-xl font-bold text-white">Auth Flow Demo</Text>
        <Text className="mt-1 text-sm text-indigo-300">Loading...</Text>
        <ActivityIndicator className="mt-6" color="#fff" size="large" />
        <View className="absolute bottom-8 left-6 right-6">
          <DemoCloseButton />
        </View>
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(app)" />
    </Stack>
  );
}

export default function AuthFlowLayout() {
  return (
    <AuthProvider>
      <AuthLayoutInner />
    </AuthProvider>
  );
}
