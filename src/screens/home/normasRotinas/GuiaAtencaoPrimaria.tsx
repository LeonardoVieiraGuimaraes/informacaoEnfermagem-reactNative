import React from 'react';
import { Text, View } from 'react-native';
import ButtonArrowforward from '../../../components/ButtonArrowforward';

interface Button {
  title: string;
  route: String;
}

export default function POPEnfermagemScreen() {
  const buttons: Button[] = [
    {
      title: 'Guia de Atenção Primária',
      route: 'GuiaAtencaoPrimaria',
    },
  ];
  return (
    <View>
      <Text></Text>
      {ButtonArrowforward(buttons)}
    </View>
  );
}
