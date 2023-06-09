import React, { FC } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tailwind from 'twrnc';

import { Button, Card, Counter, FormSelect, Switcher } from '@src/components';
import { Text } from '@src/components/Text/Text';
import { OrderViewModel } from './OrderViewModel';
import { OrderBook } from '@src/components';
import { LIMIT_OPTIONS, SECTIONS_OPTIONS } from './constants';

const getOrderBookParams = {
  symbol: 'BNBUSDT',
  limit: 5,
};

const Order: FC = () => {
  const { getOrderBook, onTypePress, onOrderTypeSelect, onSymbolPress } = OrderViewModel({ getOrderBookParams });
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Text style={styles.title} onPress={onSymbolPress}>
        SOL * USDT
      </Text>
      <Card style={styles.card}>
        {getOrderBook.isLoading && !getOrderBook.data ? (
          <ActivityIndicator />
        ) : (
          <>
            <View>
              <View style={styles.firstSectionContainer}>
                <Switcher containerStyle={styles.switcher} options={SECTIONS_OPTIONS} onPress={onTypePress} />
                <FormSelect options={LIMIT_OPTIONS} onSelect={onOrderTypeSelect} />
              </View>
              <OrderBook data={getOrderBook.data!} containerStyle={styles.orderBook} />
              <View style={styles.formItemContainer}>
                <Text>Limit Price (USDT)</Text>
                <Counter />
              </View>
              <View style={styles.formItemContainer}>
                <Text>Amount (SOL)</Text>
                <Counter />
              </View>
            </View>
            <Button text="Buy SOL" style={styles.button} />
          </>
        )}
      </Card>
    </SafeAreaView>
  );
};

export { Order };

const styles = StyleSheet.create({
  container: tailwind`flex-1 bg-black`,
  title: tailwind`text-2xl font-500 pl-4 mb-4`,
  card: tailwind`px-4 py-6 justify-between`,
  firstSectionContainer: tailwind`flex-row justify-between z-50`,
  switcher: tailwind`mb-4 w-1/3`,
  orderBook: tailwind``,
  formItemContainer: tailwind`mt-4 flex-row justify-between items-center border-b-zinc-700 border-b-2 pb-4`,
  button: tailwind`mb-4`,
});
