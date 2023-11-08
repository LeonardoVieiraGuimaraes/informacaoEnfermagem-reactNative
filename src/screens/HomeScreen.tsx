import React from 'react';
import { View } from 'react-native';
import ButtonHomeIcon from '../components/ButtonHomeIcon';

interface Button {
  title: string;
  route: any;
  icon: any;
}

export default function HomeScreen() {
  const buttons: Button[] = [
    { title: 'Legilação', route: 'Legislacao', icon: 'book' },
    { title: 'Normas e Rotinas', route: 'NormasRotinas', icon: 'list' },
    { title: 'Protocolo de Saúde', route: 'ProtocolosSaude', icon: 'medkit' },
    { title: 'Nível de Autonomia', route: 'NivelAutonomia', icon: 'bar-chart' },
    { title: 'Fale com a DSP', route: 'FaleDSP', icon: 'call' },
  ];

  return <View>{ButtonHomeIcon(buttons)}</View>;
}
