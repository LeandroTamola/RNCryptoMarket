import React, { FC } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tailwind from 'twrnc';

import { Button, Card, Counter, FormSelect, Switcher } from '@src/components';
import { Text } from '@src/components/Text/Text';
import { OrderViewModel } from './OrderViewModel';
import { OrderBook } from '@src/components';
import { LIMIT_OPTIONS, SIDE_OPTIONS } from './constants';

const Order: FC = () => {
  const {
    getOrderBook,
    onTypePress,
    onOrderTypeSelect,
    onChangeLimitPrice,
    onChangeAmount,
    onSymbolPress,
    symbol,
    formik,
    isSubmitDisabled,
  } = OrderViewModel();
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Text style={styles.title} onPress={onSymbolPress}>
        {symbol}
      </Text>
      <Card style={styles.card}>
        {getOrderBook.isLoading && !getOrderBook.data ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator />
          </View>
        ) : (
          <>
            <View>
              <View style={styles.firstSectionContainer}>
                <Switcher containerStyle={styles.switcher} options={SIDE_OPTIONS} onPress={onTypePress} />
                <FormSelect value={formik.values.type} options={LIMIT_OPTIONS} onSelect={onOrderTypeSelect} />
              </View>
              <OrderBook data={getOrderBook.data!} />
              <View style={styles.formItemContainer}>
                <Text>Limit Price</Text>
                <Counter onChange={onChangeLimitPrice} />
              </View>
              <View style={styles.formItemContainer}>
                <Text>Amount</Text>
                <Counter onChange={onChangeAmount} />
              </View>
            </View>
            <Button text="Buy SOL" style={styles.button} disabled={isSubmitDisabled} />
          </>
        )}
      </Card>
    </SafeAreaView>
  );
};

export { Order };

const styles = StyleSheet.create({
  container: tailwind`flex-1 bg-black`,
  loadingContainer: tailwind`flex-1 items-center justify-center`,
  title: tailwind`text-2xl font-500 pl-4 mb-4`,
  card: tailwind`px-4 py-6 justify-between`,
  firstSectionContainer: tailwind`flex-row justify-between z-50`,
  switcher: tailwind`mb-4 w-1/3`,
  formItemContainer: tailwind`mt-4 flex-row justify-between items-center border-b-zinc-700 border-b-2 pb-4`,
  button: tailwind`mb-4`,
});
