import React from 'react';
import { Text, View } from 'react-native';
import ButtonArrowforward from '../../../components/ButtonArrowforward';
import styles from '../../../../assets/style/utils';

interface Button {
  title: string;
  route: String;
}

export default function LeiExercicioProfissional() {
  const buttons: Button[] = [
    {
      title: 'Lei do Exercico Profissional',
      route: 'LeiExercicoProfissional',
    },
  ];
  return (
    <View>
      <Text></Text>
      {ButtonArrowforward(buttons)}
    </View>
  );
}
