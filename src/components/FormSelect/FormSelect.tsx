import React, { FC, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';
import tailwind from 'twrnc';
import { Text } from '../Text/Text';

type OptionType = { id: string; label: string };

interface FormSelectProps {
  options: OptionType[];
  onSelect: (option: OptionType) => void;
}

const FormSelect: FC<FormSelectProps> = ({ options, onSelect }) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const onPress = (option: OptionType) => {
    onSelect(option);
    setShowOptions(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setShowOptions((prev) => !prev);
        }}>
        <Text>
          {options[0].label} <Text>{'  >'}</Text>
        </Text>
      </TouchableOpacity>
      {showOptions && (
        <Animated.View style={styles.optionsContainer}>
          {options.map(({ id, label }) => (
            <TouchableOpacity key={id} onPress={() => onPress({ id, label })} style={styles.option}>
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
});
