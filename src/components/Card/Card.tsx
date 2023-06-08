import React, { FC, PropsWithChildren } from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';
import tailwind from 'twrnc';

interface CardProps extends ViewProps {}

const Card: FC<PropsWithChildren<CardProps>> = ({ style, children, ...props }) => {
  return (
    <View {...props} style={[styles.container, style]}>
      {children}
    </View>
  );
};

export { Card };

const styles = StyleSheet.create({
  container: tailwind`flex-1 rounded-3xl bg-zinc-900`,
});
