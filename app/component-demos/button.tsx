import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Stack } from "expo-router";
import { Button, type ButtonVariant, type ButtonSize } from "@/components/ui/button";
import { Send, ChevronRight } from "lucide-react-native";

const variants: { key: ButtonVariant; label: string }[] = [
  { key: "primary", label: "Primary" },
  { key: "secondary", label: "Secondary" },
  { key: "outline", label: "Outline" },
  { key: "ghost", label: "Ghost" },
  { key: "danger", label: "Danger" },
  { key: "success", label: "Success" },
  { key: "warning", label: "Warning" },
];

const sizes: { key: ButtonSize; label: string }[] = [
  { key: "sm", label: "Small" },
  { key: "md", label: "Medium" },
  { key: "lg", label: "Large" },
];

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

export default function ButtonDemoScreen() {
  const [submitting, setSubmitting] = useState(false);
  const [followed, setFollowed] = useState(false);
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  const fakeSubmit = () => {
    setSubmitting(true);
    setTimeout(() => setSubmitting(false), 2000);
  };

  return (
    <View className="flex-1 bg-cream-50 dark:bg-night-800">
      <Stack.Screen options={{ title: "Button" }} />
      <ScrollView contentContainerClassName="p-5 pb-12">
        <Section title="Variants">
          <View className="flex-row flex-wrap gap-3">
            {variants.map((v) => (
              <Button key={v.key} label={v.label} variant={v.key} />
            ))}
          </View>
        </Section>

        <Section title="Sizes">
          <View className="flex-row flex-wrap items-center gap-3">
            {sizes.map((s) => (
              <Button key={s.key} label={s.label} size={s.key} />
            ))}
          </View>
        </Section>

        <Section title="Block (full width)">
          <View className="gap-3">
            <Button label="Block Primary" variant="primary" block />
            <Button label="Block Outline" variant="outline" block />
          </View>
        </Section>

        <Section title="Loading">
          <View className="flex-row flex-wrap gap-3">
            <Button label="Submit" variant="primary" loading={submitting} onPress={fakeSubmit} />
            <Button label="Saving" variant="secondary" loading />
            <Button label="Deleting" variant="danger" loading />
          </View>
        </Section>

        <Section title="Disabled">
          <View className="flex-row flex-wrap gap-3">
            <Button label="Disabled Primary" variant="primary" disabled />
            <Button label="Disabled Outline" variant="outline" disabled />
          </View>
        </Section>

        <Section title="Text Change">
          <View className="flex-row flex-wrap gap-3">
            <Button
              label={followed ? "Following" : "Follow"}
              variant={followed ? "secondary" : "primary"}
              onPress={() => setFollowed((f) => !f)}
            />
            <Button
              label={liked ? "Liked" : "Like"}
              variant={liked ? "danger" : "outline"}
              onPress={() => setLiked((l) => !l)}
            />
            <Button
              label={`Votes ${count}`}
              variant="ghost"
              onPress={() => setCount((c) => c + 1)}
            />
          </View>
        </Section>

        <Section title="Icon Child">
          <View className="flex-row flex-wrap items-center gap-3">
            <Button variant="primary">
              <Send size={18} stroke="#fff" />
            </Button>
            <Button variant="outline">
              <ChevronRight size={18} stroke="#74644a" />
            </Button>
          </View>
        </Section>
      </ScrollView>
    </View>
  );
}
