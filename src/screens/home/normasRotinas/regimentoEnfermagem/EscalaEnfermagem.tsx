import React from 'react';
import { Text, View } from 'react-native';
import ButtonArrowforward from '../../../../components/ButtonArrowforward';
import styles from '../../../../../assets/Styles/Styles';

interface Button {
  title: string;
  route: String;
}

export default function PNAISP() {
  const buttons: Button[] = [
    {
      title: 'Escala de Enfermagem',
      route: 'EscalaEnfermagem',
    },
  ];
  return (
    <View>
      <Text className={styles.text}></Text>
      {ButtonArrowforward(buttons)}
    </View>
  );
}
