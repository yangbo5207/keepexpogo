import { Tabs } from 'expo-router';
import React from 'react';
import { Home, Compass, BookOpen, User } from 'lucide-react-native';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/haptic-tab';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme() ?? 'light';
  const isDark = colorScheme === 'dark';

  const palette = isDark
    ? {
        background: '#25221c',
        border: '#3d3830',
        active: '#e6d5ce',
        inactive: '#9e978a',
        activeBg: '#302c25',
        shadow: 'rgba(0,0,0,0.35)',
      }
    : {
        background: '#fbf8f0',
        border: '#ede4ce',
        active: '#6e4d38',
        inactive: '#b3a57e',
        activeBg: '#f5efdf',
        shadow: 'rgba(116,100,74,0.18)',
      };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: palette.active,
        tabBarInactiveTintColor: palette.inactive,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: [
          {
            backgroundColor: palette.background,
            borderTopColor: palette.border,
            borderTopWidth: 1,
            height: 78,
            paddingTop: 10,
            paddingBottom: 14,
          },
          Platform.select({
            ios: {
              shadowColor: palette.shadow,
              shadowOpacity: 1,
              shadowRadius: 18,
              shadowOffset: { width: 0, height: -6 },
            },
            android: { elevation: 12 },
          }),
        ],
        tabBarItemStyle: {
          borderRadius: 18,
          marginHorizontal: 6,
          marginVertical: 2,
        },
        tabBarActiveBackgroundColor: palette.activeBg,
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
          letterSpacing: 0.4,
        },
        tabBarIconStyle: {
          marginTop: 2,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Home size={24} stroke={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <Compass size={24} stroke={color} />,
        }}
      />
      <Tabs.Screen
        name="learn"
        options={{
          title: 'Learn',
          tabBarIcon: ({ color }) => <BookOpen size={24} stroke={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <User size={24} stroke={color} />,
        }}
      />
    </Tabs>
  );
}
