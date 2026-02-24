import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export function DemoBackButton() {
  const router = useRouter();
  return (
    <Pressable onPress={() => router.back()} hitSlop={8}>
      <MaterialIcons name="arrow-back" size={24} color="#fff" />
    </Pressable>
  );
}
