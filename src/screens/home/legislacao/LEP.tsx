import React from 'react';
import { Text, View } from 'react-native';
import ButtonArrowforward from '../../../components/ButtonArrowforward';
import styles from '../../../../assets/style/utils';

interface Button {
  title: string;
  route: String;
}

export default function PNAISP() {
  const buttons: Button[] = [
    {
      title: 'LEP',
      route: 'LEP',
    },
  ];
  return (
    <View>
      <Text></Text>
      {ButtonArrowforward(buttons)}
    </View>
  );
}
