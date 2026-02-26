import { Tabs } from 'expo-router';
import { Text, View } from 'react-native';
import { DemoBackButton } from '@/components/demo-back-button';
import { useDemoHeaderTheme } from "@/components/ui/demo-header-theme";

export default function TabsBasicLayout() {
  const headerTheme = useDemoHeaderTheme();
  return (
    <Tabs
      screenOptions={{
        headerRight: () => <DemoBackButton />,
        ...headerTheme,
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