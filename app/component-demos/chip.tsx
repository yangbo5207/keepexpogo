import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Stack } from "expo-router";
import { Chip } from "@/components/ui/chip";
import { Card } from "@/components/ui/card";

const VARIANTS = ["default", "primary", "secondary", "success", "warning", "danger"] as const;
const SIZES = ["sm", "md"] as const;

export default function ChipDemoScreen() {
  const [selected, setSelected] = useState("Design");
  const [filters, setFilters] = useState<string[]>(["Popular"]);

  const toggleFilter = (label: string) => {
    setFilters((prev) => (prev.includes(label) ? prev.filter((f) => f !== label) : [...prev, label]));
  };

  return (
    <ScrollView className="flex-1 bg-cream-50 dark:bg-night-800" contentContainerClassName="gap-6 p-4 pb-10">
      <Stack.Screen options={{ title: "Chip" }} />

      <Card>
        <Card.Eyebrow>组件演示</Card.Eyebrow>
        <Card.Title>Chip</Card.Title>
        <Card.Description>用于筛选、标签与轻量选择场景，支持主题、选中态与按压过渡。</Card.Description>
      </Card>

      <View className="gap-3">
        <Text className="text-xs font-semibold uppercase tracking-widest text-cream-600 dark:text-night-200">
          Variants
        </Text>
        <View className="flex-row flex-wrap gap-2">
          {VARIANTS.map((variant) => (
            <Chip key={variant} label={variant} variant={variant} />
          ))}
        </View>
      </View>

      <View className="gap-3">
        <Text className="text-xs font-semibold uppercase tracking-widest text-cream-600 dark:text-night-200">
          Sizes
        </Text>
        <View className="flex-row items-center gap-2">
          {SIZES.map((size) => (
            <Chip key={size} label={size} size={size} />
          ))}
        </View>
      </View>

      <View className="gap-3">
        <Text className="text-xs font-semibold uppercase tracking-widest text-cream-600 dark:text-night-200">
          Single Select
        </Text>
        <View className="flex-row flex-wrap gap-2">
          {["Design", "Motion", "Layout", "Typography"].map((item) => (
            <Chip
              key={item}
              label={item}
              variant="primary"
              selected={selected === item}
              onPress={() => setSelected(item)}
            />
          ))}
        </View>
      </View>

      <View className="gap-3">
        <Text className="text-xs font-semibold uppercase tracking-widest text-cream-600 dark:text-night-200">
          Multi Select
        </Text>
        <View className="flex-row flex-wrap gap-2">
          {["Popular", "Beginner", "iOS", "Android"].map((item) => (
            <Chip
              key={item}
              label={item}
              variant="secondary"
              selected={filters.includes(item)}
              onPress={() => toggleFilter(item)}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
