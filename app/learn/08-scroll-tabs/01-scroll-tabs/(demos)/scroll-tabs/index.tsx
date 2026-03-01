import { useState } from "react";
import { Text, View } from "react-native";
import { ScrollableTabs, type ScrollTabItem } from "./ScrollableTabs";

const TABS: ScrollTabItem[] = [
  { key: "all", label: "全部" },
  { key: "design", label: "设计系统" },
  { key: "gesture", label: "手势交互" },
  { key: "animation", label: "动画实践" },
  { key: "performance", label: "性能优化" },
  { key: "network", label: "网络请求" },
  { key: "state", label: "状态管理" },
  { key: "testing", label: "测试策略" },
  { key: "deploy", label: "发布流程" },
  { key: "monitor", label: "监控告警" },
];

const PANEL_COLORS = [
  "bg-primary-50 dark:bg-primary-950/40",
  "bg-sky-50 dark:bg-sky-950/40",
  "bg-emerald-50 dark:bg-emerald-950/40",
  "bg-amber-50 dark:bg-amber-950/40",
  "bg-rose-50 dark:bg-rose-950/40",
  "bg-indigo-50 dark:bg-indigo-950/40",
  "bg-teal-50 dark:bg-teal-950/40",
  "bg-orange-50 dark:bg-orange-950/40",
  "bg-cyan-50 dark:bg-cyan-950/40",
  "bg-lime-50 dark:bg-lime-950/40",
];

export default function ScrollTabsDemoScreen() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View className="flex-1 bg-cream-50 px-6 py-8 dark:bg-night-800">
      <Text className="text-xs font-semibold uppercase tracking-widest text-cream-700 dark:text-night-200">
        Component Practice
      </Text>
      <Text className="mt-2 text-base font-semibold text-cream-900 dark:text-night-100">滚动 Tabs</Text>
      <Text className="mt-1 text-sm text-cream-700 dark:text-night-300">
        点击任意 Tab，列表自动滚动让选中项尽量居中，Active 标识平滑移动。
      </Text>

      <View className="mt-5">
        <ScrollableTabs
          tabs={TABS}
          activeIndex={activeIndex}
          onChange={setActiveIndex}
          indicatorWidth={18}
          indicatorClassName="absolute bottom-1 h-1 rounded-xs bg-primary-500 dark:bg-primary-300"
        />
      </View>

      <View
        className={`mt-4 rounded-xs border border-cream-200 p-4 dark:border-night-600 ${PANEL_COLORS[activeIndex]}`}
      >
        <Text className="text-xs font-semibold uppercase tracking-widest text-cream-600 dark:text-night-300">
          当前选中
        </Text>
        <Text className="mt-2 text-lg font-semibold text-cream-900 dark:text-night-100">{TABS[activeIndex].label}</Text>
        <Text className="mt-2 text-sm leading-6 text-cream-700 dark:text-night-300">
          这个示例重点演示了 3 个行为：1) tab 过多时支持水平滚动；2) 点击后自动将选中项滚动到可视区域中间；3)
          active 指示器在不同 tab 之间平滑过渡。
        </Text>
      </View>
    </View>
  );
}
