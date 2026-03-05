import { Stack } from "expo-router";
import { DemoBackButton } from "@/components/demo-back-button";
import { useDemoHeaderTheme } from "@/components/ui/demo-header-theme";

export default function FlatListCoreApiLayout() {
  const headerTheme = useDemoHeaderTheme();

  return (
    <Stack
      screenOptions={{
        ...headerTheme,
        headerLeft: () => <DemoBackButton />,
      }}
    >
      <Stack.Screen name="basic" options={{ title: "FlatList Basic" }} />
      <Stack.Screen name="header" options={{ title: "ListHeaderComponent" }} />
      <Stack.Screen name="footer" options={{ title: "ListFooterComponent" }} />
      <Stack.Screen name="empty" options={{ title: "ListEmptyComponent" }} />
      <Stack.Screen name="separator" options={{ title: "ItemSeparatorComponent" }} />
      <Stack.Screen name="contact-list" options={{ title: "Contact List" }} />
    </Stack>
  );
}
