import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
  type Theme,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import "./global.css";

import { designSystem } from "@/constants/design-system";
import { useColorScheme } from "@/hooks/use-color-scheme";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const lightNavigationTheme: Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: designSystem.colors.light.background,
      card: designSystem.colors.light.surface,
      text: designSystem.colors.light.text,
      border: designSystem.colors.light.border,
      primary: designSystem.colors.light.primary,
      notification: designSystem.colors.light.primary,
    },
  };
  const darkNavigationTheme: Theme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: designSystem.colors.dark.background,
      card: designSystem.colors.dark.surface,
      text: designSystem.colors.dark.text,
      border: designSystem.colors.dark.border,
      primary: designSystem.colors.dark.primary,
      notification: designSystem.colors.dark.primary,
    },
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider
        value={colorScheme === "dark" ? darkNavigationTheme : lightNavigationTheme}
      >
        <Stack
          screenOptions={{
            gestureEnabled: true,
          }}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="learn" options={{ headerShown: false }} />
          <Stack.Screen name="settings" />
          <Stack.Screen name="components-gallery" />
          <Stack.Screen name="component-demos/button" />
          <Stack.Screen name="component-demos/switch" />
          <Stack.Screen
            name="modal"
            options={{ presentation: "modal", title: "Modal" }}
          />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
