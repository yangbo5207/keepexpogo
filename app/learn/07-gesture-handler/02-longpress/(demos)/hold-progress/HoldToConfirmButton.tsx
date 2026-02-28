import { useState } from "react";
import { Text } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { Easing, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

const HOLD_DURATION = 2000;

export function HoldToConfirmButton({ onConfirm }: { onConfirm: () => void }) {
  const [buttonWidth, setButtonWidth] = useState(0);
  const progress = useSharedValue(0);
  const isActive = useSharedValue(false);

  const progressStyle = useAnimatedStyle(() => ({
    width: buttonWidth * progress.value,
  }));

  const buttonStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withTiming(isActive.value ? 0.97 : 1, { duration: 100 }) }],
  }));

  const longPress = Gesture.LongPress()
    .minDuration(HOLD_DURATION)
    .onBegin(() => {
      "worklet";
      isActive.value = true;
      progress.value = 0;
      progress.value = withTiming(1, {
        duration: HOLD_DURATION,
        easing: Easing.linear,
      });
    })
    .onEnd((_event, success) => {
      "worklet";
      if (success) {
        runOnJS(onConfirm)();
      }
    })
    .onFinalize(() => {
      "worklet";
      isActive.value = false;
      progress.value = withTiming(0, { duration: 200 });
    });

  return (
    <GestureDetector gesture={longPress}>
      <Animated.View
        className="rounded-xs"
        onLayout={(e) => {
          setButtonWidth(e.nativeEvent.layout.width);
        }}
        style={[
          {
            paddingHorizontal: 24,
            paddingVertical: 14,
            borderWidth: 1,
            borderColor: "rgba(239, 68, 68, 0.3)",
            overflow: "hidden",
          },
          buttonStyle,
        ]}
      >
        {buttonWidth > 0 ? <Animated.View className="absolute bottom-0 left-0 top-0 rounded-xs bg-danger-500/30" style={progressStyle} /> : null}
        <Text
          style={{
            textAlign: "center",
            color: "#ef4444",
            fontWeight: "600",
            fontSize: 15,
          }}
        >
          按住 2 秒确认删除
        </Text>
      </Animated.View>
    </GestureDetector>
  );
}
