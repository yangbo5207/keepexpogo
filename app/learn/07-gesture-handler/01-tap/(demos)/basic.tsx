import { useEffect, useRef, useState } from "react";
import { Text, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { runOnJS } from "react-native-reanimated";

export default function TapBasicScreen() {
  const [didBegin, setDidBegin] = useState(false);
  const [didStart, setDidStart] = useState(false);
  const [didEnd, setDidEnd] = useState(false);
  const [didFinalize, setDidFinalize] = useState(false);
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearResetTimer = () => {
    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current);
      resetTimerRef.current = null;
    }
  };

  const resetAll = () => {
    setDidBegin(false);
    setDidStart(false);
    setDidEnd(false);
    setDidFinalize(false);
  };

  const handleBegin = () => {
    setDidBegin(true);
  };

  const handleStart = () => {
    setDidStart(true);
  };

  const handleEnd = () => {
    setDidEnd(true);
  };

  const handleFinalize = () => {
    setDidFinalize(true);
    clearResetTimer();
    resetTimerRef.current = setTimeout(() => {
      resetAll();
      resetTimerRef.current = null;
    }, 1000);
  };

  useEffect(() => {
    return () => {
      clearResetTimer();
    };
  }, []);

  const eventTextClassName = "text-sm font-medium text-cream-700 dark:text-night-200";

  const renderEventStatus = (label: string, triggered: boolean) => {
    return (
      <Text className={eventTextClassName}>
        {label}: {triggered ? "Triggered" : "Idle"}
      </Text>
    );
  };

  const tap = Gesture.Tap()
    .onBegin(() => {
      "worklet";
      runOnJS(handleBegin)();
    })
    .onStart(() => {
      "worklet";
      runOnJS(handleStart)();
    })
    .onEnd(() => {
      "worklet";
      runOnJS(handleEnd)();
    })
    .onFinalize(() => {
      "worklet";
      runOnJS(handleFinalize)();
    });

  return (
    <View className="flex-1 items-center justify-center gap-8 bg-cream-50 dark:bg-night-800">
      <View className="items-center gap-2">
        <Text className="text-xs font-semibold uppercase tracking-widest text-cream-600 dark:text-night-200">Tap Gesture</Text>
        {renderEventStatus("onBegin", didBegin)}
        {renderEventStatus("onStart", didStart)}
        {renderEventStatus("onEnd", didEnd)}
        {renderEventStatus("onFinalize", didFinalize)}
      </View>

      <GestureDetector gesture={tap}>
        <View className="h-24 w-24 items-center justify-center rounded-2xl bg-primary-500 shadow-xl shadow-primary-500/30">
          <Text className="text-sm font-semibold text-white">Tap</Text>
        </View>
      </GestureDetector>
    </View>
  );
}
