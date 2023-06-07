import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tailwind from 'twrnc';

const Home: FC = ({}) => {
  return <SafeAreaView style={styles.container} edges={['top']}></SafeAreaView>;
};

export { Home };

const styles = StyleSheet.create({
  container: tailwind`flex-1 bg-white dark:bg-black mb-4`,
});
