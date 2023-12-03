import React from 'react';
import { Text, View } from 'react-native';
import ButtonArrowforward from '../../../../components/ButtonArrowforward';
import styles from '../../../Styles/Styles';

interface Button {
  title: string;
  route: String;
}

export default function RegimentoEnfermagem() {
  const buttons: Button[] = [
    {
      title: 'Ficha Funcional',
      route: 'FichaFuncional',
    },
  ];
  return (
    <View>
      <Text className={styles.text}></Text>
      {ButtonArrowforward(buttons)}
    </View>
  );
}
