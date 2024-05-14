import React from 'react';
import { Text, View } from 'react-native';
import ButtonArrowforward from '../../../../components/ButtonArrowforward';
import styles from '../../../../assets/styles/styles';

interface Button {
  title: string;
  route: String;
}

export default function Treinamento() {
  const buttons: Button[] = [
    {
      title: 'TELELAB',
      route: 'Treinamento',
    },
  ];
  return (
    <View>
      <Text className={styles.text}>
        {'Participar do treinamento via TELELAB sobre testagem rápida \nLink: '}
      </Text>
      {ButtonArrowforward(buttons)}
    </View>
  );
}
