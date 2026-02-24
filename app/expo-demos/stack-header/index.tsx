import { View, Text, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function HeaderHome() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-white dark:bg-[#151718]" contentContainerClassName="gap-4 p-4 pb-8">
      <View className="gap-2">
        <Text className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          Navigate to see different header styles
        </Text>
        <View className="flex-row flex-wrap gap-2">
          {[
            { label: 'Home', screen: '' },
            { label: 'Profile', screen: 'profile' },
            { label: 'Settings', screen: 'settings' },
          ].map((item) => (
            <Pressable
              key={item.label}
              onPress={() => {
                if (item.screen) router.push(`/expo-demos/stack-header/${item.screen}` as any);
              }}
              className={`rounded-lg px-4 py-2 ${
                !item.screen
                  ? 'bg-indigo-500 dark:bg-indigo-600'
                  : 'bg-gray-200 active:bg-gray-300 dark:bg-gray-700'
              }`}
            >
              <Text
                className={`text-sm font-medium ${
                  !item.screen ? 'text-white' : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {item.label}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      <View className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
        <Text className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
          Current header options
        </Text>
        <View className="gap-1.5">
          <View className="flex-row justify-between">
            <Text className="text-xs text-gray-500 dark:text-gray-400">headerStyle</Text>
            <Text className="font-mono text-xs text-indigo-600 dark:text-indigo-400">
              {"{ backgroundColor: '#6366f1' }"}
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-xs text-gray-500 dark:text-gray-400">headerTintColor</Text>
            <Text className="font-mono text-xs text-indigo-600 dark:text-indigo-400">'#ffffff'</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-xs text-gray-500 dark:text-gray-400">headerRight</Text>
            <Text className="font-mono text-xs text-indigo-600 dark:text-indigo-400">{'() => <Button />'}</Text>
          </View>
        </View>
      </View>

      <View className="rounded-xl bg-indigo-50 p-4 dark:bg-indigo-900/20">
        <Text className="mb-1 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
          Expo Router equivalent
        </Text>
        <Text className="font-mono text-xs leading-5 text-indigo-600 dark:text-indigo-400">
          {'<Stack.Screen\n  name="home"\n  options={{\n    title: "Home",\n    headerRight: () => <Button />,\n  }}\n/>'}
        </Text>
      </View>

      <View className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
        <Text className="text-xs text-blue-700 dark:text-blue-300">
          Expo Router 中通过 Stack.Screen 的 options 属性配置 Header。支持 headerRight、
          headerLeft、headerTitle 自定义组件，以及 headerLargeTitle 大标题模式（iOS）。
        </Text>
      </View>
    </ScrollView>
  );
}
