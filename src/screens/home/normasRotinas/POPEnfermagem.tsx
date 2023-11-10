import React from 'react';
import { Text, View } from 'react-native';
import ButtonArrowforward from '../../../components/ButtonArrowforward';

interface Button {
  title: string;
  route: String;
}

export default function POPEnfermagem() {
  const buttons: Button[] = [
    {
      title: 'POP Enfermagem',
      route: 'POPEnfermagem',
    },
  ];
  return (
    <View>
      <Text></Text>
      {ButtonArrowforward(buttons)}
    </View>
  );
}
