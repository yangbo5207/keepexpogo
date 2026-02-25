import React, { Suspense } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";

import { Card } from "@/components/ui/card";
import { getDemoById } from "@/content/learn";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function DemoScreen() {
  const { demoId } = useLocalSearchParams<{ demoId: string }>();
  const theme = useColorScheme() ?? "light";
  const id = Array.isArray(demoId) ? demoId[0] : demoId;
  const demo = id ? getDemoById(id) : undefined;

  if (!demo || !demo.component) {
    return (
      <View className="flex-1 items-center justify-center bg-cream-50 dark:bg-night-800">
        <Stack.Screen options={{ title: "Not Found" }} />
        <Text className="text-cream-900 dark:text-night-50">Demo not found.</Text>
      </View>
    );
  }

  const DemoComponent = React.lazy(demo.component);
  const spinnerColor = theme === "dark" ? "#e6d5ce" : "#6e4d38";

  return (
    <View className="flex-1 bg-cream-50 dark:bg-night-800">
      <Stack.Screen options={{ title: demo.title }} />
      <Suspense
        fallback={
          <View className="flex-1 items-center justify-center px-6">
            <Card className="w-full items-center">
              <ActivityIndicator size="large" color={spinnerColor} />
              <Text className="mt-3 text-sm text-cream-700 dark:text-night-200">
                Loading demo...
              </Text>
            </Card>
          </View>
        }
      >
        <DemoComponent />
      </Suspense>
    </View>
  );
}
