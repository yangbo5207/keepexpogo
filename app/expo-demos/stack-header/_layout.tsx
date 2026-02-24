import { Stack } from 'expo-router';
import { View, Text, Pressable } from 'react-native';
import { DemoCloseButton } from '@/components/demo-close-button';

function CustomTitle() {
  return (
    <View className="flex-row items-center gap-2">
      <View className="h-7 w-7 items-center justify-center rounded-full bg-white/20">
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
          headerLeft: () => <DemoCloseButton />,
          headerStyle: { backgroundColor: '#6366f1' },
          headerTintColor: '#fff',
          headerRight: () => (
            <Pressable className="rounded-md bg-white/20 px-3 py-1 active:bg-white/30">
              <Text className="text-sm font-medium text-white">+ New</Text>
            </Pressable>
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
