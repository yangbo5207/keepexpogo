import { useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

interface StackEntry {
  id: number;
  route: string;
  method: 'navigate' | 'push';
}

let nextId = 1;

export default function NavVsPushIndex() {
  const router = useRouter();
  const [stack, setStack] = useState<StackEntry[]>([
    { id: nextId++, route: '/home', method: 'navigate' },
  ]);

  const currentRoute = stack[stack.length - 1].route;
  const routes = ['/home', '/profile', '/settings'];

  const handleNavigate = (route: string) => {
    const existingIndex = stack.findIndex((e) => e.route === route);
    if (existingIndex >= 0) {
      setStack(stack.slice(0, existingIndex + 1));
    } else {
      setStack([...stack, { id: nextId++, route, method: 'navigate' }]);
    }
  };

  const handlePush = (route: string) => {
    setStack([...stack, { id: nextId++, route, method: 'push' }]);
  };

  const handleBack = () => {
    if (stack.length > 1) setStack(stack.slice(0, -1));
  };

  const handleReset = () => {
    nextId = 1;
    setStack([{ id: nextId++, route: '/home', method: 'navigate' }]);
  };

  return (
    <ScrollView className="flex-1 bg-white dark:bg-[#151718]" contentContainerClassName="gap-4 p-4 pb-8">
      <View className="items-center rounded-xl bg-indigo-50 p-4 dark:bg-indigo-900/20">
        <Text className="text-xs text-indigo-500 dark:text-indigo-400">Current Route</Text>
        <Text className="mt-1 text-xl font-bold text-indigo-700 dark:text-indigo-300">{currentRoute}</Text>
        <Text className="mt-1 text-xs text-indigo-400">Stack depth: {stack.length}</Text>
      </View>

      <View className="gap-2">
        <Text className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">router.navigate(route)</Text>
        <Text className="text-xs text-gray-400 dark:text-gray-500">Reuses existing screen if already in stack. Won't create duplicates.</Text>
        <View className="flex-row gap-2">
          {routes.map((route) => (
            <Pressable key={`nav-${route}`} onPress={() => handleNavigate(route)} className={`flex-1 items-center rounded-lg py-2.5 ${currentRoute === route ? 'bg-indigo-200 dark:bg-indigo-800' : 'bg-indigo-100 active:bg-indigo-200 dark:bg-indigo-900/30'}`}>
              <Text className="text-xs font-semibold text-indigo-700 dark:text-indigo-300">{route}</Text>
            </Pressable>
          ))}
        </View>
      </View>

      <View className="gap-2">
        <Text className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">router.push(route)</Text>
        <Text className="text-xs text-gray-400 dark:text-gray-500">Always pushes a new screen, even if route already exists in stack.</Text>
        <View className="flex-row gap-2">
          {routes.map((route) => (
            <Pressable key={`push-${route}`} onPress={() => handlePush(route)} className="flex-1 items-center rounded-lg bg-teal-100 py-2.5 active:bg-teal-200 dark:bg-teal-900/30">
              <Text className="text-xs font-semibold text-teal-700 dark:text-teal-300">{route}</Text>
            </Pressable>
          ))}
        </View>
      </View>

      <View className="flex-row gap-2">
        <Pressable onPress={handleBack} className={`flex-1 items-center rounded-lg py-2.5 ${stack.length <= 1 ? 'bg-gray-100 dark:bg-gray-800' : 'bg-gray-200 active:bg-gray-300 dark:bg-gray-700'}`}>
          <Text className={`text-xs font-semibold ${stack.length <= 1 ? 'text-gray-300 dark:text-gray-600' : 'text-gray-600 dark:text-gray-300'}`}>← router.back()</Text>
        </Pressable>
        <Pressable onPress={handleReset} className="flex-1 items-center rounded-lg bg-red-100 py-2.5 active:bg-red-200 dark:bg-red-900/30">
          <Text className="text-xs font-semibold text-red-600 dark:text-red-400">Reset Stack</Text>
        </Pressable>
      </View>

      <View className="gap-2">
        <Text className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">Navigation Stack</Text>
        <View className="rounded-xl bg-gray-50 p-3 dark:bg-gray-800">
          {[...stack].reverse().map((entry, i) => {
            const isTop = i === 0;
            return (
              <View key={entry.id} className={`flex-row items-center gap-2 rounded-lg px-3 py-2 ${isTop ? 'bg-white dark:bg-gray-700' : ''}`}>
                <Text className="text-xs text-gray-300 dark:text-gray-600">{stack.length - i}</Text>
                <View className={`rounded px-1.5 py-0.5 ${entry.method === 'push' ? 'bg-teal-100 dark:bg-teal-900/40' : 'bg-indigo-100 dark:bg-indigo-900/40'}`}>
                  <Text className={`text-[10px] font-medium ${entry.method === 'push' ? 'text-teal-600 dark:text-teal-400' : 'text-indigo-600 dark:text-indigo-400'}`}>{entry.method}</Text>
                </View>
                <Text className={`flex-1 font-mono text-xs ${isTop ? 'font-semibold text-gray-800 dark:text-gray-100' : 'text-gray-400 dark:text-gray-500'}`}>{entry.route}</Text>
                {isTop && <Text className="text-[10px] text-indigo-500 dark:text-indigo-400">current</Text>}
              </View>
            );
          })}
        </View>
      </View>

      <View className="rounded-xl bg-teal-50 p-4 dark:bg-teal-900/20">
        <Text className="mb-1 text-xs font-semibold text-teal-700 dark:text-teal-300">Expo Router code</Text>
        <Text className="font-mono text-xs leading-5 text-teal-600 dark:text-teal-400">
          {'import { router } from "expo-router"\n\n// navigate: won\'t duplicate\nrouter.navigate("/profile")\n\n// push: always creates new entry\nrouter.push("/profile")\n\n// back: pop one screen\nrouter.back()'}
        </Text>
      </View>
    </ScrollView>
  );
}
