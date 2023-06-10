import React, { FC, memo, useRef } from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import tailwind from 'twrnc';
import { SvgImage } from '../SvgImage/SvgImage';

interface SearchBarProps extends TextInputProps {}

const SearchBar: FC<SearchBarProps> = ({ value, onChangeText, style, placeholderTextColor, ...props }) => {
  const textInputRef = useRef<TextInput>(null);
  return (
    <View style={styles.container} onTouchStart={() => textInputRef.current?.focus()}>
      <SvgImage name="MagnifyingGlass" style={styles.magnify} color="zinc-600" />
      <TextInput
        ref={textInputRef}
        style={[style, styles.textInput]}
        placeholderTextColor={placeholderTextColor ?? tailwind.color('zinc-600')}
        value={value}
        onChangeText={onChangeText}
        {...props}
      />
    </View>
  );
};

const MemoizedSearchBar = memo(SearchBar);
export { MemoizedSearchBar as SearchBar };

const styles = StyleSheet.create({
  container: tailwind`flex-row items-center bg-zinc-800 rounded-lg px-3 h-14`,
  magnify: tailwind`mr-2`,
  textInput: tailwind.style('text-white my-4 pt-0 pb-0', {
    fontSize: 16,
    textAlignVertical: 'top',
  }),
});
