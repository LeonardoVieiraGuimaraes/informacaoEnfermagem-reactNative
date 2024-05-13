import React from 'react';
import { Text, View } from 'react-native';
import ButtonArrowforward from '../../../components/ButtonArrowForward';

interface Button {
  title: string;
  route: String;
}

export default function ManualTransporte() {
  const buttons: Button[] = [
    {
      title: 'Manual de Tanporte',
      route: 'ManualTransporte',
    },
  ];
  return (
    <View>
      <Text></Text>
      {ButtonArrowforward(buttons)}
    </View>
  );
}
