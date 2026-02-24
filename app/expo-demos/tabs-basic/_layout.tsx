import { Tabs } from 'expo-router';
import { Text, View } from 'react-native';
import { DemoCloseButton } from '@/components/demo-close-button';

export default function TabsBasicLayout() {
  return (
    <Tabs
      screenOptions={{
        headerRight: () => <DemoCloseButton />,
        headerStyle: { backgroundColor: '#6366f1' },
        headerTintColor: '#fff',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <Text>{focused ? '🏡' : '🏠'}</Text>,
          tabBarBadge: 3,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ focused }) => <Text>{focused ? '🔎' : '🔍'}</Text>,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => <Text>{focused ? '👤' : '👤'}</Text>,
          tabBarBadge: '!',
        }}
      />
    </Tabs>
  );
}
