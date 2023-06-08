import React, { FC } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card, Counter, Switcher } from '@src/components';
import tailwind from 'twrnc';
import { Text } from '@src/components/Text/Text';
import { HomeViewModel } from './HomeViewModel';
import { OrderBook } from '@src/components';

const getOrderBookParams = {
  symbol: 'BNBUSDT',
  limit: 5,
};

export const SECTIONS = [
  { id: 0, text: 'BUY' },
  { id: 1, text: 'SELL' },
];

const Home: FC = () => {
  const { getOrderBook, onTypePress } = HomeViewModel({ getOrderBookParams });
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Text style={styles.title}>SOL * USDT</Text>
      <Card style={styles.card}>
        {getOrderBook.isLoading && !getOrderBook.data ? (
          <ActivityIndicator />
        ) : (
          <>
            <Switcher containerStyle={styles.switcher} options={SECTIONS} onPress={onTypePress} />
            <OrderBook data={getOrderBook.data!} containerStyle={styles.orderBook} />
            <View style={styles.limitPriceContainer}>
              <Text>Limit Price (USDT)</Text>
              <Counter />
            </View>
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
  card: tailwind`px-4 py-6`,
  switcher: tailwind`mb-4 w-1/3`,
  orderBook: tailwind``,
  limitPriceContainer: tailwind`mt-4 flex-row justify-between items-center`,
});
