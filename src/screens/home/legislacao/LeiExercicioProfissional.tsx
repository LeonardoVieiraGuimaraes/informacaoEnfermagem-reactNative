import React from 'react';
import { Text, View } from 'react-native';
import ButtonArrowforward from '../../../components/ButtonArrowforward';
import styles from '../../../assets/styles/styles';

interface Button {
  title: string;
  route: String;
}

export default function LeiExercicioProfissional() {
  const buttons: Button[] = [
    {
      title: 'Lei do Exercício Profissional',
      route: 'LeiExercicioProfissional',
    },
  ];
  return (
    <View>
      <Text className={styles.text}>
        {'Clique no botão abaixo para acessar:'}
      </Text>
      {ButtonArrowforward(buttons)}
    </View>
  );
}
