import { Text, View, type ViewStyle } from "react-native";
import Animated from "react-native-reanimated";

const FRONT_CLASS = "absolute h-full w-full overflow-hidden rounded-3xl border border-primary-300 bg-primary-500 shadow-xl shadow-primary-500/30 dark:border-primary-700";

type FlipCardFaceProps = {
  style: Animated.AnimatedStyleProp<ViewStyle>;
};

export function FlipCardFront({ style }: FlipCardFaceProps) {
  return (
    <Animated.View
      style={[
        style,
        {
          backfaceVisibility: "hidden",
        },
      ]}
      className={FRONT_CLASS}
    >
      <View className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/15" />
      <View className="absolute -left-12 -bottom-12 h-36 w-36 rounded-full bg-white/10" />
      <View className="flex-1 w-full px-5 pt-5">
        <View className="flex-row items-center justify-between">
          <Text className="text-xs font-semibold uppercase tracking-widest text-white/80">Premium Pass</Text>
          <View className="rounded-full bg-white/20 px-3 py-1">
            <Text className="text-[10px] font-semibold uppercase text-white/90">Active</Text>
          </View>
        </View>

        <View className="mt-6 gap-2">
          <Text className="text-2xl font-bold text-white">Aurora Studio</Text>
          <Text className="text-sm text-white/80">Member since 2024</Text>
        </View>
      </View>

      <View className="w-full px-5 pb-5">
        <View className="flex-row items-center justify-between">
          <Text className="text-xs text-white/70">ID</Text>
          <Text className="text-sm font-semibold tracking-widest text-white">0482 9281</Text>
        </View>
      </View>
    </Animated.View>
  );
}

export default FlipCardFront;
