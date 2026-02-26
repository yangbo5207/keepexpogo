import { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '@/components/ui/button';
import { Chip } from '@/components/ui/chip';

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
    <ScrollView className="flex-1 bg-cream-50 dark:bg-night-800" contentContainerClassName="gap-4 p-4 pb-8">
      <View className="items-center rounded-xl bg-primary-50 p-4 dark:bg-primary-900/20">
        <Text className="text-xs text-primary-500 dark:text-primary-400">Current Route</Text>
        <Text className="mt-1 text-xs text-primary-400">Stack depth: {stack.length}</Text>
      </View>

      <View className="gap-2">
        <Text className="text-xs font-bold uppercase tracking-wider text-cream-600 dark:text-cream-700">router.navigate(route)</Text>
        <Text className="text-xs text-cream-600 dark:text-cream-700">Reuses existing screen if already in stack. Won't create duplicates.</Text>
        <View className="flex-row gap-2">
          {routes.map((route) => (
            <Chip
              key={`nav-${route}`}
              label={route}
              variant="primary"
              size="sm"
              selected={currentRoute === route}
              className="flex-1"
              onPress={() => handleNavigate(route)}
            />
          ))}
        </View>
      </View>

      <View className="gap-2">
        <Text className="text-xs font-bold uppercase tracking-wider text-cream-600 dark:text-cream-700">router.push(route)</Text>
        <Text className="text-xs text-cream-600 dark:text-cream-700">Always pushes a new screen, even if route already exists in stack.</Text>
        <View className="flex-row gap-2">
          {routes.map((route) => (
            <Chip
              key={`push-${route}`}
              label={route}
              variant="secondary"
              size="sm"
              className="flex-1"
              onPress={() => handlePush(route)}
            />
          ))}
        </View>
      </View>

      <View className="flex-row gap-2">
        <Button className="flex-1 py-2.5" label="← router.back()" variant="outline" disabled={stack.length <= 1} onPress={handleBack} />
        <Button className="flex-1 py-2.5" label="Reset Stack" variant="danger" onPress={handleReset} />
      </View>

      <View className="gap-2">
        <Text className="text-xs font-bold uppercase tracking-wider text-cream-600 dark:text-cream-700">Navigation Stack</Text>
        <View className="rounded-xl bg-cream-100 p-3 dark:bg-night-700">
          {[...stack].reverse().map((entry, i) => {
            const isTop = i === 0;
            return (
              <View key={entry.id} className={`flex-row items-center gap-2 rounded-lg px-3 py-2 ${isTop ? 'bg-cream-50 dark:bg-night-600' : ''}`}>
                <Text className="text-xs text-cream-500 dark:text-cream-700">{stack.length - i}</Text>
                <View className={`rounded px-1.5 py-0.5 ${entry.method === 'push' ? 'bg-secondary-100 dark:bg-secondary-900/40' : 'bg-primary-100 dark:bg-primary-900/40'}`}>
                  <Text className={`text-[10px] font-medium ${entry.method === 'push' ? 'text-secondary-600 dark:text-secondary-400' : 'text-primary-600 dark:text-primary-400'}`}>{entry.method}</Text>
                </View>
                <Text className={`flex-1 font-mono text-xs ${isTop ? 'font-semibold text-cream-900 dark:text-night-50' : 'text-cream-600 dark:text-cream-700'}`}>{entry.route}</Text>
                {isTop && <Text className="text-[10px] text-primary-500 dark:text-primary-400">current</Text>}
              </View>
            );
          })}
        </View>
      </View>

      <View className="rounded-xl bg-secondary-50 p-4 dark:bg-secondary-900/20">
        <Text className="mb-1 text-xs font-semibold text-secondary-700 dark:text-secondary-300">Expo Router code</Text>
        <Text className="font-mono text-xs leading-5 text-secondary-600 dark:text-secondary-400">
          {'import { router } from "expo-router"\n\n// navigate: won\'t duplicate\nrouter.navigate("/profile")\n\n// push: always creates new entry\nrouter.push("/profile")\n\n// back: pop one screen\nrouter.back()'}
        </Text>
      </View>
    </ScrollView>
  );
}
