import { DemoBackButton } from "@/components/demo-back-button";
import { Stack } from "expo-router";
import { useDemoHeaderTheme } from "@/components/ui/demo-header-theme";

export default function AnimCompositeLayout() {
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
        options={{ title: "Composite Animations" }}
      />
      <Stack.Screen name="sequence" options={{ title: "Sequence" }} />
      <Stack.Screen name="parallel" options={{ title: "Parallel" }} />
      <Stack.Screen name="stagger" options={{ title: "Stagger" }} />
      <Stack.Screen name="loop" options={{ title: "Loop" }} />
      <Stack.Screen name="button-feedback" options={{ title: "Button Feedback" }} />
    </Stack>
  );
}
