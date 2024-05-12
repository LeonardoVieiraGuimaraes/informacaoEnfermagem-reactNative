import React from 'react';
import { Text, View } from 'react-native';
import ButtonArrowforward from '../../../components/ButtonArrowforward';
import styles from '../../../Styles/Styles';

interface Button {
  title: string;
  route: String;
}

export default function PNAISP() {
  const buttons: Button[] = [
    {
      title: 'PNAISP',
      route: 'PNAISP',
    },
    {
      title: 'Cartilha PNAISP',
      route: 'PNAISPCartilha',
    },
  ];
  return (
    <View>
      <Text></Text>
      {ButtonArrowforward(buttons)}
    </View>
  );
}
