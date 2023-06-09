import React, { FC } from 'react';
import { StyleSheet, Text as RNText, TextProps as RNTextProps } from 'react-native';
import tailwind from 'twrnc';

interface TextProps extends RNTextProps {}

const Text: FC<TextProps> = ({ style, children, ...props }) => {
  return (
    <RNText style={[styles.container, style]} allowFontScaling={false} {...props}>
      {children}
    </RNText>
  );
};

export { Text };

const styles = StyleSheet.create({
  container: tailwind`text-white`,
});
