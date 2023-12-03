import React from 'react';
import { Text, View } from 'react-native';
import ButtonArrowforward from '../../../components/ButtonArrowforward';
import styles from '../../Styles/Styles';

interface Button {
  title: string;
  route: String;
}

export default function RENP() {
  const buttons: Button[] = [
    {
      title: 'RENP',
      route: 'RENP',
    },
  ];
  return (
    <View className={styles.screen}>
      <Text className={styles.text}></Text>
      {ButtonArrowforward(buttons)}
    </View>
  );
}
