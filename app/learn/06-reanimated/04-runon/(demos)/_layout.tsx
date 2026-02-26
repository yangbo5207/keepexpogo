import { Stack } from "expo-router";
import { DemoBackButton } from "@/components/demo-back-button";
import { useDemoHeaderTheme } from "@/components/ui/demo-header-theme";

export default function ReanimatedRunOnLayout() {
  const headerTheme = useDemoHeaderTheme();

  return (
    <Stack
      screenOptions={{
        ...headerTheme,
        headerLeft: () => <DemoBackButton />,
      }}
    >
      <Stack.Screen name="thread-communication" options={{ title: "runOnJS + runOnUI" }} />
      <Stack.Screen name="like-rollback" options={{ title: "Like Rollback" }} />
    </Stack>
  );
}
