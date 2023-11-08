import React from 'react';
import { View } from 'react-native';
import ButtonSecond from '../../components/ButtonArrowforward';
import styles from '../../../assets/style/utils';
interface Button {
  title: string;
  route: any;
}

export default function NormasRotinasScreen() {
  const buttons: Button[] = [
    {
      title: 'Regimento de Enfermagem',
      route: 'RegimentoEnfermagem',
    },
    { title: 'POP Enfermagem', route: 'POPEnfermagem' },
    {
      title: 'Manual de Transporte',
      route: 'ManualTransporte',
    },
    {
      title: 'Guia de Atenção Primária',
      route: 'GuiaAtencaoPrimaria',
    },
  ];

  return <View className={styles.viewScreen}>{ButtonSecond(buttons)}</View>;
}
