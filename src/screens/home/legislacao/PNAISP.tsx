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
      title: 'Portaria Interministerial',
      route: 'PNAISP',
    },
    {
      title: 'Cartilha PNAISP',
      route: 'PNAISPCartilha',
    },
  ];
  return (
    <View>
      <Text className={styles.text}>
        {
          'Política Nacional de Atenção Integral à Saúde das Pessoas Privadas de Liberdade no Sistema Prisional.\nClique no botão abaixo para acessar:'
        }
      </Text>
      {ButtonArrowforward(buttons)}
    </View>
  );
}
