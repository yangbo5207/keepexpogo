import { View, Text, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Chip } from '@/components/ui/chip';

export default function HeaderHome() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-cream-50 dark:bg-night-800" contentContainerClassName="gap-4 p-4 pb-8">
      <View className="gap-2">
        <Text className="text-sm font-semibold text-cream-700 dark:text-night-200">
          Navigate to see different header styles
        </Text>
        <View className="flex-row flex-wrap gap-2">
          {[
            { label: 'Home', screen: '' },
            { label: 'Profile', screen: 'profile' },
            { label: 'Settings', screen: 'settings' },
          ].map((item) => (
            <Chip
              key={item.label}
              label={item.label}
              size="sm"
              variant={item.screen ? "default" : "primary"}
              selected={!item.screen}
              onPress={() => {
                if (item.screen) router.push(`/learn/04-expo-router/01-stack/stack-header/${item.screen}` as any);
              }}
            />
          ))}
        </View>
      </View>

      <View className="rounded-xl bg-cream-100 p-4 dark:bg-night-700">
        <Text className="mb-2 text-sm font-semibold text-cream-700 dark:text-night-200">
          Current header options
        </Text>
        <View className="gap-1.5">
          <View className="flex-row justify-between">
            <Text className="text-xs text-cream-700 dark:text-night-200">headerStyle</Text>
            <Text className="font-mono text-xs text-primary-600 dark:text-primary-400">
              {"{ backgroundColor: '#6366f1' }"}
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-xs text-cream-700 dark:text-night-200">headerTintColor</Text>
            <Text className="font-mono text-xs text-primary-600 dark:text-primary-400">'#ffffff'</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-xs text-cream-700 dark:text-night-200">headerRight</Text>
            <Text className="font-mono text-xs text-primary-600 dark:text-primary-400">{'() => <Button />'}</Text>
          </View>
        </View>
      </View>

      <View className="rounded-xl bg-primary-50 p-4 dark:bg-primary-900/20">
        <Text className="mb-1 text-xs font-semibold text-primary-700 dark:text-primary-300">
          Expo Router equivalent
        </Text>
        <Text className="font-mono text-xs leading-5 text-primary-600 dark:text-primary-400">
          {'<Stack.Screen\n  name="home"\n  options={{\n    title: "Home",\n    headerRight: () => <Button />,\n  }}\n/>'}
        </Text>
      </View>

      <View className="rounded-lg bg-secondary-50 p-3 dark:bg-secondary-900/20">
        <Text className="text-xs text-secondary-700 dark:text-secondary-300">
          Expo Router 中通过 Stack.Screen 的 options 属性配置 Header。支持 headerRight、
          headerLeft、headerTitle 自定义组件，以及 headerLargeTitle 大标题模式（iOS）。
        </Text>
      </View>
    </ScrollView>
  );
}
