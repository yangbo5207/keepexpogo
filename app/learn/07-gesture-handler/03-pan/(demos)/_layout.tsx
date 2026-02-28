import { Stack } from "expo-router";
import { DemoBackButton } from "@/components/demo-back-button";
import { useDemoHeaderTheme } from "@/components/ui/demo-header-theme";

export default function PanGestureLayout() {
  const headerTheme = useDemoHeaderTheme();

  return (
    <Stack
      screenOptions={{
        ...headerTheme,
        headerLeft: () => <DemoBackButton />,
      }}
    >
      <Stack.Screen name="basic" options={{ title: "Pan Basic" }} />
      <Stack.Screen name="decay" options={{ title: "Pan Decay" }} />
      <Stack.Screen name="swipe-card" options={{ title: "Pan Swipe Card" }} />
      <Stack.Screen name="bounded-drag" options={{ title: "Pan Bounded Drag" }} />
      <Stack.Screen name="bottom-sheet" options={{ title: "Pan Bottom Sheet" }} />
    </Stack>
  );
}
