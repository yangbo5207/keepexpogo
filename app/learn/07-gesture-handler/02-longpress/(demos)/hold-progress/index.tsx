import { useState } from "react";
import { Text, View } from "react-native";
import { HoldToConfirmButton } from "./HoldToConfirmButton";

export default function LongPressHoldProgressScreen() {
  const [confirmCount, setConfirmCount] = useState(0);

  const handleConfirm = () => {
    setConfirmCount((current) => current + 1);
  };

  return (
    <View className="flex-1 items-center justify-center gap-5 bg-cream-50 px-6 dark:bg-night-800">
      <Text className="text-xs font-semibold uppercase tracking-widest text-cream-700 dark:text-night-200">LongPress Progress</Text>
      <Text className="text-sm text-cream-800 dark:text-night-200">确认次数：{confirmCount}</Text>
      <HoldToConfirmButton onConfirm={handleConfirm} />
      <Text className="text-center text-sm text-cream-700 dark:text-night-300">持续按住直到进度填满，才会触发确认动作。</Text>
    </View>
  );
}
