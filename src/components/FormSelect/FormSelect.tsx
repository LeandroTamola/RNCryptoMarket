import React, { FC, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import Animated, { AnimatedStyleProp, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import tailwind from 'twrnc';
import { Text } from '../Text/Text';
import { SvgImage } from '../SvgImage/SvgImage';

type OptionType = { id: number; label: string; value: string };

interface FormSelectProps {
  value: string;
  options: OptionType[];
  onSelect: (option: string) => void;
}

const FormSelect: FC<FormSelectProps> = ({ value, options, onSelect }) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const onOptionPress = (option: string) => {
    onSelect(option);
    setShowOptions(false);
  };

  const animatedChevronStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: withTiming(showOptions ? '180deg' : '0deg') }],
    } as AnimatedStyleProp<ViewStyle>;
  });

  const onSelectPress = () => {
    setShowOptions((prev) => !prev);
  };

  const currentLabel = options.find((option) => option.value === value)?.label;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onSelectPress}>
        <View style={styles.labelContainer}>
          <Text>{currentLabel}</Text>
          <Animated.View style={[styles.chevron, animatedChevronStyle]}>
            <SvgImage name="ChevronDown" width={16} height={16} />
          </Animated.View>
        </View>
      </TouchableOpacity>
      {showOptions && (
        <Animated.View style={styles.optionsContainer}>
          {options.map(({ id, label, value }) => (
            <TouchableOpacity key={id} onPress={() => onOptionPress(value)} style={styles.option}>
              <Text>{label}</Text>
            </TouchableOpacity>
          ))}
        </Animated.View>
      )}
    </View>
  );
};

export { FormSelect };

const styles = StyleSheet.create({
  container: tailwind`flex-row bg-black rounded-xl items-center h-12 p-4 relative`,
  optionsContainer: tailwind`absolute bg-black rounded-xl right-0 top-12 mt-2 z-20`,
  option: tailwind`p-4 text-center border-b-zinc-900 border-b-2`,
  labelContainer: tailwind`flex-row justify-between items-center`,
  chevron: tailwind`ml-2`,
});
