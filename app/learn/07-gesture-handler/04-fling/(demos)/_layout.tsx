import { Stack } from "expo-router";
import { DemoBackButton } from "@/components/demo-back-button";
import { useDemoHeaderTheme } from "@/components/ui/demo-header-theme";

export default function FlingGestureLayout() {
  const headerTheme = useDemoHeaderTheme();

  return (
    <Stack
      screenOptions={{
        ...headerTheme,
        headerLeft: () => <DemoBackButton />,
      }}
    >
      <Stack.Screen name="basic" options={{ title: "Fling Basic" }} />
      <Stack.Screen name="pager" options={{ title: "Fling Pager" }} />
      <Stack.Screen name="coexist" options={{ title: "Fling + Pinch Coexist" }} />
    </Stack>
  );
}
