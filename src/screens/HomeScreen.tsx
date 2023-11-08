import React from 'react';
import { View } from 'react-native';
import { NavigationProp } from '../models/types';
import { useNavigation } from '@react-navigation/native';
import ButtonHomeIcon from '../components/ButtonHomeIcon';
import styles from '../../assets/style/utils';

interface Button {
  title: string;
  route: any;
  icon: any;
}

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();
  const buttons: Button[] = [
    { title: 'Legilação', route: 'Legislacao', icon: 'book' },
    { title: 'Normas e Rotinas', route: 'NormasRotinas', icon: 'list' },
    { title: 'Protocolo de Saúde', route: 'ProtocolosSaude', icon: 'medkit' },
    { title: 'Nível de Autonomia', route: 'NivelAutonomia', icon: 'bar-chart' },
    { title: 'Fale com a DSP', route: 'FaleDSP', icon: 'call' },
  ];

  return (
    <View className={styles.viewScreenHome}>{ButtonHomeIcon(buttons)}</View>
  );
}
