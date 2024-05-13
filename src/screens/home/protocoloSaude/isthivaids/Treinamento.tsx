import React from 'react';
import { Text, View } from 'react-native';
import ButtonArrowforward from '../../../../components/ButtonArrowForward';
import styles from '../../../../Styles/Styles';

interface Button {
  title: string;
  route: String;
}

export default function Treinamento() {
  const buttons: Button[] = [
    {
      title: 'Treinamento',
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
