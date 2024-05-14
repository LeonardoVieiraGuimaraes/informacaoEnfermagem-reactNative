import React from 'react';
import { Text, View } from 'react-native';
import ButtonArrowforward from '../../../../components/ButtonArrowforward';

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
      <Text></Text>
      {ButtonArrowforward(buttons)}
    </View>
  );
}
