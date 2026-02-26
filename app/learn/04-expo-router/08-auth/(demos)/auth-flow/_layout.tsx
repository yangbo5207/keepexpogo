import { Stack, Redirect } from 'expo-router';
import { View, Text, ActivityIndicator } from 'react-native';
import { AuthProvider, useAuth } from './_context';
import { DemoBackButton } from '@/components/demo-back-button';
import { useDemoHeaderTheme } from "@/components/ui/demo-header-theme";

function AuthLayoutInner() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center bg-primary-600 dark:bg-primary-900">
        <Text className="text-5xl">🔐</Text>
        <Text className="mt-1 text-sm text-primary-300">Loading...</Text>
        <ActivityIndicator className="mt-6" color="#fff" size="large" />
        <View className="absolute bottom-8 left-6 right-6">
          <DemoBackButton />
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
  const headerTheme = useDemoHeaderTheme();
  return (
    <AuthProvider>
      <AuthLayoutInner />
    </AuthProvider>
  );
}