import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../../assets/Styles/Styles';

interface Button {
  title: string;
  route: string;
  icon: any;
}

export default function FaleDSPScreen() {
  return (
    <View className={styles.screen}>
      <Text>Fale com </Text>
    </View>
  );
}
