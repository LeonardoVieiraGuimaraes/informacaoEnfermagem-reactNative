import React from 'react';
import { Text, View } from 'react-native';
import ButtonArrowforward from '../../../../components/ButtonArrowforward';
import styles from '../../../../Styles/Styles';

interface Button {
  title: string;
  route: String;
}

export default function RegimentoEnfermagem() {
  const buttons: Button[] = [
    {
      title: 'Regimento de Enfermagem',
      route: 'RegimentoEnfermagemDoc',
    },
  ];
  return (
    <View>
      <Text></Text>
      {ButtonArrowforward(buttons)}
    </View>
  );
}
