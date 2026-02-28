import { useState } from "react";
import { Text, View } from "react-native";
import { MessageBubble } from "./MessageBubble";

export default function LongPressContextMenuScreen() {
  const [lastAction, setLastAction] = useState("暂无操作");

  const handleSelectAction = (action: string) => {
    setLastAction(`选中：${action}`);
  };

  return (
    <View className="flex-1 bg-cream-50 px-6 py-8 dark:bg-night-800">
      <Text className="text-xs font-semibold uppercase tracking-widest text-cream-700 dark:text-night-200">LongPress Context Menu</Text>
      <Text className="mt-2 text-base font-semibold text-cream-900 dark:text-night-100">长按弹出菜单，滑动选择，松手确认</Text>
      <Text className="mt-1 text-sm text-cream-700 dark:text-night-300">经典上下文菜单交互：长按消息气泡并向上滑动到目标选项。</Text>

      <View className="mt-8 items-center">
        <MessageBubble message="这是一条消息，长按试试看" onSelectAction={handleSelectAction} />
      </View>

      <View className="mt-8 rounded-xs bg-cream-100 px-4 py-3 dark:bg-night-700">
        <Text className="text-xs font-semibold uppercase tracking-wide text-cream-600 dark:text-night-300">Last Action</Text>
        <Text className="mt-1 text-sm text-cream-900 dark:text-night-100">{lastAction}</Text>
      </View>
    </View>
  );
}
