import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Stack } from "expo-router";
import { Switch } from "@/components/ui/switch";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View className="mb-6">
      <Text className="mb-3 text-xs font-semibold uppercase tracking-wider text-cream-600 dark:text-night-200">
        {title}
      </Text>
      {children}
    </View>
  );
}

export default function SwitchDemoScreen() {
  const [basicOn, setBasicOn] = useState(false);
  const [basicOff, setBasicOff] = useState(true);
  const [sizeSm, setSizeSm] = useState(false);
  const [sizeMd, setSizeMd] = useState(true);

  return (
    <View className="flex-1 bg-cream-50 dark:bg-night-800">
      <Stack.Screen options={{ title: "Switch" }} />
      <ScrollView contentContainerClassName="p-5 pb-12">
        <Section title="Basic">
          <View className="flex-row flex-wrap items-center gap-4">
            <Switch value={basicOn} onValueChange={setBasicOn} />
            <Switch value={basicOff} onValueChange={setBasicOff} />
          </View>
        </Section>

        <Section title="Sizes">
          <View className="flex-row flex-wrap items-center gap-4">
            <Switch size="sm" value={sizeSm} onValueChange={setSizeSm} />
            <Switch size="md" value={sizeMd} onValueChange={setSizeMd} />
          </View>
        </Section>

        <Section title="With Label">
          <View className="gap-3">
            <View className="flex-row items-center justify-between">
              <Text className="text-base font-medium text-cream-900 dark:text-night-50">
                Notifications
              </Text>
              <Switch value={basicOn} onValueChange={setBasicOn} />
            </View>
            <View className="flex-row items-center justify-between">
              <Text className="text-base font-medium text-cream-900 dark:text-night-50">
                Auto Sync
              </Text>
              <Switch value={basicOff} onValueChange={setBasicOff} />
            </View>
          </View>
        </Section>

        <Section title="Disabled">
          <View className="flex-row flex-wrap items-center gap-4">
            <Switch value={false} disabled />
            <Switch value disabled />
          </View>
        </Section>
      </ScrollView>
    </View>
  );
}
