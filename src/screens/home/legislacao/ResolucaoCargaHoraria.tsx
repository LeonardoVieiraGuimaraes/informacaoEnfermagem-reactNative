import React from 'react';
import { Text, View } from 'react-native';
import ButtonArrowforward from '../../../components/ButtonArrowforward';

interface Button {
  title: string;
  route: String;
}

export default function ResolucaoCargaHoraria() {
  const buttons: Button[] = [
    {
      title: 'Resolucao de Carga Horaria',
      route: 'ResolucaoCargaHoraria',
    },
  ];
  return (
    <View>
      <Text></Text>
      {ButtonArrowforward(buttons)}
    </View>
  );
}
