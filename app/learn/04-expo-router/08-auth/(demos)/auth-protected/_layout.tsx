import { Stack, Redirect } from 'expo-router';
import { View, Text, ActivityIndicator } from 'react-native';
import { ProtectedAuthProvider, useProtectedAuth } from './_context';
import { DemoBackButton } from '@/components/demo-back-button';
import { useState, useEffect } from 'react';
import { useDemoHeaderTheme } from "@/components/ui/demo-header-theme";

function ProtectedLayoutInner() {
  const { session, isLoading } = useProtectedAuth();
  const [splashProgress, setSplashProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) return;
    const steps = [
      { delay: 400, progress: 30 },
      { delay: 800, progress: 60 },
      { delay: 1200, progress: 90 },
      { delay: 1600, progress: 100 },
    ];
    const timers = steps.map((step) => setTimeout(() => setSplashProgress(step.progress), step.delay));
    return () => timers.forEach(clearTimeout);
  }, [isLoading]);

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center bg-primary-600 dark:bg-primary-900">
        <Text className="text-5xl">🛡️</Text>
        <Text className="mt-1 text-sm text-primary-300">Secure & Protected</Text>
        <View className="mt-8 h-1 w-48 overflow-hidden rounded-full bg-primary-400/30">
          <View className="h-full rounded-full bg-cream-50" style={{ width: `${splashProgress}%` }} />
        </View>
        <Text className="mt-2 font-mono text-xs text-primary-300">
          {splashProgress < 30 ? 'Loading config...' : splashProgress < 60 ? 'Checking token...' : splashProgress < 90 ? 'Verifying session...' : 'Ready!'}
        </Text>
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

export default function AuthProtectedLayout() {
  const headerTheme = useDemoHeaderTheme();
  return (
    <ProtectedAuthProvider>
      <ProtectedLayoutInner />
    </ProtectedAuthProvider>
  );
}