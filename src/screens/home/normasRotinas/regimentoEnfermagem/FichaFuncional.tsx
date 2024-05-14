import React from 'react';
import { Text, View } from 'react-native';
import ButtonArrowforward from '../../../../components/ButtonArrowforward';

interface Button {
  title: string;
  route: String;
}

export default function FichaFuncional() {
  const buttons: Button[] = [
    {
      title: 'Ficha Funcional',
      route: 'FichaFuncional',
    },
  ];
  return (
    <View>
      <Text></Text>
      {ButtonArrowforward(buttons)}
    </View>
  );
}
