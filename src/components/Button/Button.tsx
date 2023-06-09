import React, { FC } from 'react';
import { StyleSheet, TouchableOpacityProps, TouchableOpacity, ViewStyle, ActivityIndicator } from 'react-native';
import tailwind from 'twrnc';
import { Text } from '../Text/Text';
import { SvgImage } from '../SvgImage/SvgImage';
import { SvgImageName } from '../SvgImage/SvgImage';

type Theme = 'primary' | 'secondary' | 'ghost';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  theme?: Theme;
  isLoading?: boolean;
  svgName?: SvgImageName;
}

const Button: FC<ButtonProps> = ({ text, style, theme = 'primary', isLoading, disabled, svgName, ...props }) => {
  return (
    <TouchableOpacity
      {...props}
      style={[style, styles.container, themeStyles[theme], disabled && styles.disabled]}
      activeOpacity={0.5}
      disabled={disabled || isLoading}>
      {svgName && <SvgImage name={svgName} style={styles.svgImage} />}
      {isLoading ? <ActivityIndicator color={'white'} /> : <Text style={styles.text}>{text}</Text>}
    </TouchableOpacity>
  );
};

export { Button };

const themeStyles: Record<Theme, ViewStyle> = {
  primary: tailwind`bg-green-500 w-full justify-center`,
  secondary: tailwind`bg-red-500 w-full justify-center`,
  ghost: tailwind`bg-transparent`,
};

const styles = StyleSheet.create({
  container: tailwind.style(`flex-row  rounded-xl px-4 items-center `, { maxHeight: 50, minHeight: 50 }),
  disabled: tailwind`bg-gray-400`,
  text: tailwind`text-white font-500 text-center text-lg`,
  svgImage: tailwind`mr-2`,
});
