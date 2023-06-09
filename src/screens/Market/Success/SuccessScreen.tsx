import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import tailwind from 'twrnc';
import { Card, Text, SvgImage, Button } from '@src/components';
import { SuccessScreenViewModel } from './SuccessScreenViewModel';

const SuccessScreen: FC = () => {
  const { animatedContainerStyle, animatedContentStyle, onContinuePress, params } = SuccessScreenViewModel();

  return (
    <Animated.View style={[styles.container, animatedContainerStyle]}>
      <Card style={styles.card}>
        <Animated.View style={[styles.bodyContainer, animatedContentStyle]}>
          <Animated.View style={[styles.checkmarkContainer, animatedContainerStyle]}>
            <SvgImage name="Checkmark" width={35} height={35} />
          </Animated.View>
          <Text style={styles.title}>Success</Text>
          <Text style={styles.subtitle}>
            Your {params.type.toLowerCase()} {params.side.toLowerCase()} operation was{'\n'}done successfully!
          </Text>
          <Text style={styles.symbol}>{params.symbol}</Text>
        </Animated.View>
        <Button text="Continue" onPress={onContinuePress} theme="primary" style={styles.continueButton} />
      </Card>
    </Animated.View>
  );
};

export { SuccessScreen };

const styles = StyleSheet.create({
  container: tailwind`flex-1 bg-black items-center justify-end px-1`,
  card: tailwind`w-full max-h-4/5 items-center justify-between px-4 pb-8`,
  bodyContainer: tailwind`items-center justify-center`,
  title: tailwind`font-bold text-2xl mt-10 text-center`,
  subtitle: tailwind`font-500 text-zinc-300 text-lg mt-6 text-center`,
  symbol: tailwind`text-xl font-bold mt-14 text-center`,
  checkmarkContainer: tailwind`bg-green-500 mt-14 rounded-full w-20 h-20 items-center justify-center`,
  continueButton: tailwind`px-4`,
});
