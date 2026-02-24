import { Tabs } from 'expo-router';
import { View, Text, Pressable, Animated } from 'react-native';
import { useRef, useEffect } from 'react';
import { DemoBackButton } from '@/components/demo-back-button';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';

const TAB_ITEMS = [
  { key: 'index', label: 'Feed', icon: '○', activeIcon: '●' },
  { key: 'search', label: 'Search', icon: '◇', activeIcon: '◆' },
  { key: 'create', label: 'Create', icon: '□', activeIcon: '■' },
  { key: 'inbox', label: 'Inbox', icon: '△', activeIcon: '▲' },
];

function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  const indicatorAnim = useRef(new Animated.Value(state.index)).current;

  useEffect(() => {
    Animated.spring(indicatorAnim, {
      toValue: state.index,
      useNativeDriver: true,
      tension: 200,
      friction: 20,
    }).start();
  }, [state.index, indicatorAnim]);

  return (
    <View className="px-4 pb-4 pt-2">
      <View className="relative flex-row rounded-2xl bg-gray-100 p-1.5 dark:bg-gray-800">
        <Animated.View
          className="absolute bottom-1.5 left-1.5 top-1.5 rounded-xl bg-white dark:bg-gray-600"
          style={{
            width: `${100 / TAB_ITEMS.length}%` as any,
            transform: [{
              translateX: indicatorAnim.interpolate({
                inputRange: TAB_ITEMS.map((_, i) => i),
                outputRange: TAB_ITEMS.map((_, i) => i * 85),
              }),
            }],
          }}
        />
        {TAB_ITEMS.map((tab, i) => {
          const isActive = state.index === i;
          return (
            <Pressable
              key={tab.key}
              onPress={() => navigation.navigate(state.routes[i].name)}
              className="flex-1 items-center gap-0.5 py-2.5"
            >
              <Text className={`text-base ${isActive ? 'opacity-100' : 'opacity-40'}`}>
                {isActive ? tab.activeIcon : tab.icon}
              </Text>
              <Text className={`text-[10px] ${isActive ? 'font-bold text-gray-800 dark:text-gray-100' : 'text-gray-400 dark:text-gray-500'}`}>
                {tab.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

export default function TabsCustomLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerRight: () => <DemoBackButton />,
        headerStyle: { backgroundColor: '#6366f1' },
        headerTintColor: '#fff',
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Feed' }} />
      <Tabs.Screen name="search" options={{ title: 'Search' }} />
      <Tabs.Screen name="create" options={{ title: 'Create' }} />
      <Tabs.Screen name="inbox" options={{ title: 'Inbox' }} />
    </Tabs>
  );
}
