import React, { FC } from 'react';
import {
  KeyboardAvoidingView as RNKeyboardAvoidingView,
  StyleSheet,
  Platform,
  KeyboardAvoidingViewProps,
} from 'react-native';
import tailwind from 'twrnc';

type Props = KeyboardAvoidingViewProps;

const KeyboardAvoidingView: FC<Props> = ({ children, keyboardVerticalOffset, style }) => {
  return (
    <RNKeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[styles.container, style]}
      contentContainerStyle={[styles.container, style]}
      keyboardVerticalOffset={keyboardVerticalOffset}>
      {children}
    </RNKeyboardAvoidingView>
  );
};
export { KeyboardAvoidingView };

const styles = StyleSheet.create({
  container: tailwind`flex-1`,
});
