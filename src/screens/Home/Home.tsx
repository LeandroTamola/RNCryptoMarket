import React, { FC } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from '@src/components';
import tailwind from 'twrnc';
import { Text } from '@src/components/Text/Text';
import { HomeViewModel } from './HomeViewModel';
import { OrderBook } from '@src/components';

const getOrderBookParams = {
  symbol: 'BNBUSDT',
  limit: 5,
};

const Home: FC = () => {
  const { getOrderBook } = HomeViewModel({ getOrderBookParams });
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Text style={styles.title}>SOL * USDT</Text>
      <Card style={styles.card}>
        <Text style={styles.cardTitle}>Hello</Text>
        {getOrderBook.isLoading && !getOrderBook.data ? (
          <ActivityIndicator />
        ) : (
          <OrderBook data={getOrderBook.data!} containerStyle={styles.orderBook} />
        )}
      </Card>
    </SafeAreaView>
  );
};

export { Home };

const styles = StyleSheet.create({
  container: tailwind`flex-1 bg-black`,
  title: tailwind`text-2xl font-500 pl-4 mb-4`,
  card: tailwind`px-4`,
  cardTitle: tailwind`my-8`,
  orderBook: tailwind``,
});
