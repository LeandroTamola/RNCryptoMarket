import React, { FC, useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import tailwind from 'twrnc';
import { Text } from '../Text/Text';
import { hitSlop } from '@src/utils/hitslop';

interface CounterProps {
  onChange: (amount: number) => void;
}

type Action = 'increment' | 'decrement';

const Counter: FC<CounterProps> = ({ onChange }) => {
  const [amount, setAmount] = useState<number>(0);

  const handleAmount = (type: Action) => {
    if (type === 'increment') {
      setAmount((prev) => prev + 1);
    }
    if (type === 'decrement' && amount > 0) {
      setAmount((prev) => prev - 1);
    }
  };

  useEffect(() => {
    onChange(amount);
  }, [amount, onChange]);

  return (
    <View style={styles.container}>
      <TouchableOpacity hitSlop={hitSlop.lightHitSlop} onPress={() => handleAmount('decrement')}>
        <Text style={styles.operator}>-</Text>
      </TouchableOpacity>
      <Text style={styles.amount}>{amount}</Text>
      <TouchableOpacity hitSlop={hitSlop.lightHitSlop} onPress={() => handleAmount('increment')}>
        <Text style={styles.operator}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export { Counter };

const styles = StyleSheet.create({
  container: tailwind`flex-row bg-black rounded-xl p-4`,
  amount: tailwind`mx-8 w-4 text-center`,
  operator: tailwind`text-zinc-400`,
});
