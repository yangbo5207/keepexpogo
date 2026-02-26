import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { useColorScheme } from '@/hooks/use-color-scheme';

export function DemoBackButton() {
  const router = useRouter();
  const theme = useColorScheme() ?? 'light';
  const color = theme === 'dark' ? '#e6d5ce' : '#6e4d38';
  return (
    <Pressable onPress={() => router.back()} hitSlop={8}>
      <MaterialIcons name="arrow-back" size={24} color={color} />
    </Pressable>
  );
}
