import { Stack } from "expo-router";
import { DemoBackButton } from "@/components/demo-back-button";
import { useDemoHeaderTheme } from "@/components/ui/demo-header-theme";

export default function RefreshPaginationLayout() {
  const headerTheme = useDemoHeaderTheme();

  return (
    <Stack
      screenOptions={{
        ...headerTheme,
        headerLeft: () => <DemoBackButton />,
      }}
    >
      <Stack.Screen name="pull-to-refresh" options={{ title: "Pull To Refresh" }} />
      <Stack.Screen name="refresh-and-load-more" options={{ title: "Refresh + Load More" }} />
    </Stack>
  );
}
