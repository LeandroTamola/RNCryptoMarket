import React, { FC } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Card, Counter, FormSelect, Switcher } from '@src/components';
import tailwind from 'twrnc';
import { Text } from '@src/components/Text/Text';
import { HomeViewModel } from './HomeViewModel';
import { OrderBook } from '@src/components';
import { OrderType } from '@src/api/models/Order';

const getOrderBookParams = {
  symbol: 'BNBUSDT',
  limit: 5,
};

export const SECTIONS_OPTIONS = [
  { id: 0, label: 'BUY' },
  { id: 1, label: 'SELL' },
];

export const LIMIT_OPTIONS: { id: OrderType; label: string }[] = [
  { id: 'LIMIT', label: 'Limit' },
  { id: 'MARKET', label: 'Market' },
  { id: 'STOP_LOSS', label: 'Stop Loss' },
  { id: 'STOP_LOSS_LIMIT', label: 'Stop Loss Limit' },
  { id: 'TAKE_PROFIT', label: 'Take Profi' },
  { id: 'TAKE_PROFIT_LIMIT', label: 'Take Profit Limit' },
  { id: 'LIMIT_MAKER', label: 'Limit Maker' },
];

const Home: FC = () => {
  const { getOrderBook, onTypePress, onOrderTypeSelect } = HomeViewModel({ getOrderBookParams });
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Text style={styles.title}>SOL * USDT</Text>
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

export { Home };

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
