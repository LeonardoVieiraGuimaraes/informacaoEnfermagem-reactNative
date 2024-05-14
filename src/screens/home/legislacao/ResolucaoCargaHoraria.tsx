import React from 'react';
import { Text, View } from 'react-native';
import ButtonArrowforward from '../../../components/ButtonArrowforward';
import styles from '../../../assets/styles/styles';

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
      <Text className={styles.text}>
        {'Clique no botão abaixo para acessar:'}
      </Text>
      {ButtonArrowforward(buttons)}
    </View>
  );
}
