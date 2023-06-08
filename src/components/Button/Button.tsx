import React, { FC } from 'react';
import { StyleSheet, TouchableOpacityProps, TouchableOpacity, ViewStyle, ActivityIndicator } from 'react-native';
import tailwind from 'twrnc';
import { Text } from '../Text/Text';

type Theme = 'primary' | 'secondary';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  theme?: Theme;
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({ text, style, theme = 'primary', isLoading, disabled, ...props }) => {
  return (
    <TouchableOpacity
      {...props}
      style={[style, styles.container, themeStyles[theme], disabled && styles.disabled]}
      activeOpacity={0.5}
      disabled={disabled}>
      {isLoading ? <ActivityIndicator color={'white'} /> : <Text style={styles.text}>{text}</Text>}
    </TouchableOpacity>
  );
};

export { Button };

const themeStyles: Record<Theme, ViewStyle> = {
  primary: tailwind`bg-green-500`,
  secondary: tailwind`bg-red-500`,
};

const styles = StyleSheet.create({
  container: tailwind`w-full rounded-xl h-12 p-4 items-center`,
  disabled: tailwind`bg-gray-400`,
  text: tailwind`text-white font-bold text-center`,
});
