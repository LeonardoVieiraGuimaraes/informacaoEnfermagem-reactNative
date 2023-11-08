import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import ButtonSecond from '../../components/ButtonArrowforward';
import styles from '../../../assets/style/utils';

interface Button {
  title: string;
  route: string;
  icon: any;
}

export default function FaleDSPScreen() {
  const buttons: Button[] = [
    { title: 'Legilação', route: 'Pacientes', icon: 'book' },
    { title: 'Normas e Rotinas', route: 'Agendamentos', icon: 'list' },
    { title: 'Protocolo de Saúde', route: 'Prescrições', icon: 'medkit' },
    { title: 'Nível de Autonomia', route: 'Relatórios', icon: 'bar-chart' },
    // { title: "Fale com a DSP", route: "Relatórios", icon: "call" },
  ];

  return <View className={styles.viewScreen}>{ButtonSecond(buttons)}</View>;
}
