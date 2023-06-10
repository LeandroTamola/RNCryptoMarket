import React, { FC } from 'react';
import {
  View,
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import tailwind from 'twrnc';

interface TextInputProps extends RNTextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
}

const TextInput: FC<TextInputProps> = ({ placeholder, style, containerStyle, ...props }) => {
  return (
    <View style={[containerStyle, styles.container]}>
      <RNTextInput
        {...props}
        style={[style, styles.amount]}
        placeholder={placeholder}
        placeholderTextColor={tailwind.color('zinc-600')}
      />
    </View>
  );
};

export { TextInput };

const styles = StyleSheet.create({
  container: tailwind`bg-black rounded-xl p-4 w-28`,
  amountContainer: tailwind`w-24`,
  amount: tailwind`text-center text-white text-center font-500 h-4`,
  operator: tailwind`text-zinc-400`,
});
