import { Stack } from "expo-router";
import { DemoBackButton } from "@/components/demo-back-button";
import { useDemoHeaderTheme } from "@/components/ui/demo-header-theme";

export default function ReanimatedCompositeLayout() {
  const headerTheme = useDemoHeaderTheme();

  return (
    <Stack
      screenOptions={{
        ...headerTheme,
        headerLeft: () => <DemoBackButton />,
      }}
    >
      <Stack.Screen name="sequence" options={{ title: "withSequence" }} />
      <Stack.Screen name="shake" options={{ title: "Shake" }} />
      <Stack.Screen name="list-stagger" options={{ title: "List Stagger" }} />
      <Stack.Screen name="pulse" options={{ title: "Pulse" }} />
      <Stack.Screen name="add-to-cart" options={{ title: "Add to Cart" }} />
    </Stack>
  );
}
