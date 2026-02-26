import { DemoBackButton } from "@/components/demo-back-button";
import { Stack } from "expo-router";
import { useDemoHeaderTheme } from "@/components/ui/demo-header-theme";

export default function AnimScrollViewLayout() {
  const headerTheme = useDemoHeaderTheme();

  return (
    <Stack
      screenOptions={{
        ...headerTheme,
        headerLeft: () => <DemoBackButton />,
      }}
    >
      <Stack.Screen
        name="index"
        options={{ title: "Animated.ScrollView" }}
      />
      <Stack.Screen
        name="collapsing-header"
        options={{ title: "Collapsing Header" }}
      />
      <Stack.Screen
        name="parallax-list"
        options={{ title: "Parallax List" }}
      />
      <Stack.Screen
        name="page-indicator"
        options={{ title: "Page Indicator" }}
      />
    </Stack>
  );
}
