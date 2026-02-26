import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import * as Haptics from "expo-haptics";
import { Tabs } from "expo-router";
import { BookOpen, Compass, Home, User } from "lucide-react-native";
import { useEffect, type ReactNode } from "react";
import { Platform, Pressable, View } from "react-native";
import Animated, { Easing, interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useColorScheme } from "@/hooks/use-color-scheme";

type TabPalette = {
  background: string;
  border: string;
  active: string;
  inactive: string;
  activeBg: string;
  shadow: string;
};

function ReanimatedTabItem({
  routeKey,
  label,
  isFocused,
  onPress,
  onLongPress,
  accessibilityLabel,
  testID,
  palette,
  renderIcon,
}: {
  routeKey: string;
  label: string;
  isFocused: boolean;
  onPress: () => void;
  onLongPress: () => void;
  accessibilityLabel?: string;
  testID?: string;
  palette: TabPalette;
  renderIcon: (props: { focused: boolean; color: string; size: number }) => ReactNode;
}) {
  const selectedProgress = useSharedValue(isFocused ? 1 : 0);
  const pressProgress = useSharedValue(0);
  const bgOpacity = useSharedValue(isFocused ? 1 : 0);

  useEffect(() => {
    selectedProgress.value = withTiming(isFocused ? 1 : 0, {
      duration: 240,
      easing: Easing.out(Easing.cubic),
    });
    if (!isFocused) {
      bgOpacity.value = withTiming(0, {
        duration: 180,
        easing: Easing.out(Easing.cubic),
      });
    }
  }, [isFocused]);

  const itemStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: 1 - pressProgress.value * 0.04,
      },
    ],
  }));

  const bgStyle = useAnimatedStyle(() => ({
    opacity: bgOpacity.value,
    backgroundColor: palette.activeBg,
    borderRadius: 4,
  }));

  const inactiveIconStyle = useAnimatedStyle(() => ({
    opacity: 1 - selectedProgress.value,
  }));

  const activeIconStyle = useAnimatedStyle(() => ({
    opacity: selectedProgress.value,
  }));

  const labelStyle = useAnimatedStyle(() => ({
    color: interpolateColor(selectedProgress.value, [0, 1], [palette.inactive, palette.active]),
  }));

  return (
    <Pressable
      key={routeKey}
      onPressIn={() => {
        pressProgress.value = withTiming(1, {
          duration: 110,
          easing: Easing.out(Easing.quad),
        });
        if (process.env.EXPO_OS === "ios") {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
      }}
      onPressOut={() => {
        pressProgress.value = withTiming(0, {
          duration: 140,
          easing: Easing.out(Easing.quad),
        });
      }}
      onPress={() => {
        if (!isFocused) {
          bgOpacity.value = withTiming(1, {
            duration: 180,
            easing: Easing.out(Easing.cubic),
          });
        }
        onPress();
      }}
      onLongPress={onLongPress}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityState={isFocused ? { selected: true } : {}}
      testID={testID}
      className="flex-1 px-1"
    >
      <Animated.View style={itemStyle} className="relative items-center py-2.5">
        <Animated.View style={bgStyle} className="absolute inset-0" />
        <View style={{ height: 24, width: 24, alignItems: "center", justifyContent: "center" }}>
          <Animated.View style={[{ position: "absolute" }, inactiveIconStyle]}>{renderIcon({ focused: false, color: palette.inactive, size: 24 })}</Animated.View>
          <Animated.View style={activeIconStyle}>{renderIcon({ focused: true, color: palette.active, size: 24 })}</Animated.View>
        </View>
        <Animated.Text style={labelStyle} className="mt-0.5 text-[11px] font-semibold tracking-[0.4px]">
          {label}
        </Animated.Text>
      </Animated.View>
    </Pressable>
  );
}

function CustomTabBar({ state, descriptors, navigation, palette }: BottomTabBarProps & { palette: TabPalette }) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        {
          backgroundColor: palette.background,
          borderTopColor: palette.border,
          borderTopWidth: 1,
          paddingTop: 6,
          paddingBottom: Math.max(insets.bottom, 8) + 4,
          paddingHorizontal: 8,
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
      ]}
    >
      <View className="flex-row">
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;
          const label = typeof options.tabBarLabel === "string" ? options.tabBarLabel : (options.title ?? route.name);

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <ReanimatedTabItem
              key={route.key}
              routeKey={route.key}
              label={label}
              isFocused={isFocused}
              onPress={onPress}
              onLongPress={onLongPress}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarButtonTestID}
              palette={palette}
              renderIcon={(props) => options.tabBarIcon?.(props) ?? null}
            />
          );
        })}
      </View>
    </View>
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme() ?? "light";
  const isDark = colorScheme === "dark";

  const palette: TabPalette = isDark
    ? {
        background: "#25221c",
        border: "#3d3830",
        active: "#e6d5ce",
        inactive: "#9e978a",
        activeBg: "#302c25",
        shadow: "rgba(0,0,0,0.35)",
      }
    : {
        background: "#fbf8f0",
        border: "#ede4ce",
        active: "#6e4d38",
        inactive: "#b3a57e",
        activeBg: "#f5efdf",
        shadow: "rgba(116,100,74,0.18)",
      };

  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} palette={palette} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Home size={24} stroke={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => <Compass size={24} stroke={color} />,
        }}
      />
      <Tabs.Screen
        name="learn"
        options={{
          title: "Learn",
          tabBarIcon: ({ color }) => <BookOpen size={24} stroke={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <User size={24} stroke={color} />,
        }}
      />
    </Tabs>
  );
}
