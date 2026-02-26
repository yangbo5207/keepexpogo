import { Stack } from 'expo-router';
import { View, Text } from 'react-native';
import { DemoBackButton } from '@/components/demo-back-button';
import { Button } from '@/components/ui/button';

function CustomTitle() {
  return (
    <View className="flex-row items-center gap-2">
      <View className="h-7 w-7 items-center justify-center rounded-full bg-cream-100/20">
        <Text className="text-sm">👤</Text>
      </View>
      <View>
        <Text className="text-sm font-semibold text-white">Yang Bo</Text>
        <Text className="text-xs text-white/70">Online</Text>
      </View>
    </View>
  );
}

export default function StackHeaderLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Home',
          headerLeft: () => <DemoBackButton />,
          headerStyle: { backgroundColor: '#6366f1' },
          headerTintColor: '#fff',
          headerRight: () => (
            <Button className="bg-cream-100/20 px-3 py-1 active:bg-cream-100/30" size="sm" variant="ghost">
              <Text className="text-sm font-medium text-white">+ New</Text>
            </Button>
          ),
        }}
      />
      <Stack.Screen
        name="profile"
        options={{
          headerTitle: () => <CustomTitle />,
          headerStyle: { backgroundColor: '#f43f5e' },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="settings"
        options={{
          title: 'Settings',
          headerLargeTitle: true,
          headerStyle: { backgroundColor: '#f3f4f6' },
          headerTintColor: '#1f2937',
        }}
      />
    </Stack>
  );
}
