import React, { FC } from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import Animated, {
  AnimatedStyleProp,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import tailwind from 'twrnc';
import { Text } from '../Text/Text';
import { useLayout } from '@src/hooks';

interface SwitcherProps {
  options: { id: number; label: string }[];
  containerStyle: StyleProp<ViewStyle>;
  onPress: (id: number) => void;
}

const redColor = tailwind.color('bg-red-500') as string;
const greenColor = tailwind.color('bg-green-500') as string;

const Switcher: FC<SwitcherProps> = ({ containerStyle, options, onPress }) => {
  const translateX = useSharedValue<number>(0);
  const { onLayout, layout } = useLayout();

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
      width: layout ? layout?.width / options.length : 0,
      backgroundColor: withTiming(translateX.value > 30 ? redColor : greenColor),
    } as AnimatedStyleProp<ViewStyle>;
  }, [layout]);

  const onOptionPress = (itemId: number) => {
    'worklet';
    translateX.value = withTiming((layout ? layout?.width / options.length : 0) * itemId);

    runOnJS(onPress)(itemId);
  };

  return (
    <View style={[styles.container, containerStyle]} onLayout={onLayout}>
      {options.map((option) => (
        <Text key={option.id} onPress={() => onOptionPress(option.id)} style={styles.option}>
          {option.label}
        </Text>
      ))}
      <Animated.View style={[styles.selectionBackground, animatedStyle]} />
    </View>
  );
};

export { Switcher };

const styles = StyleSheet.create({
  container: tailwind`flex-row bg-black rounded-xl w-full justify-between p-4 relative`,
  option: tailwind`z-50`,
  selectionBackground: tailwind`absolute h-12 bg-green-200 rounded-xl overflow-hidden shadow-md`,
});
