import { DemoBackButton } from "@/components/demo-back-button";
import { Stack } from "expo-router";

export default function AnimScrollViewLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#f97316" },
        headerTintColor: "#fff",
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
