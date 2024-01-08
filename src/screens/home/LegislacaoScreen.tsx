import React from 'react';
import { ScrollView, View } from 'react-native';
import { useState } from 'react';
import buttonDropDown from '../../components/ButtonDropDown';
import RENP from './legislacao/RENP';
import LEP from './legislacao/LEP';
import LeiExercicioProfissional from './legislacao/LeiExercicioProfissional';
import PNAISP from './legislacao/PNAISP';
import ResolucaoCargaHoraria from './legislacao/ResolucaoCargaHoraria';
import styles from '../Styles/Styles';

interface Button {
  title: string;
  setIsOpen: any;
  isOpen: boolean;
  informacao: any;
}

export default function LegislacaoScreen() {
  const [isOpenRENP, setIsOpenRENP] = useState(false);
  const [isOpenLEP, setIsOpenLEP] = useState(false);
  const [isOpenLeiExercicioProfissional, setIsOpenLeiExercicioProfissional] =
    useState(false);
  const [isOpenPNAISP, setIsOpenPNAISP] = useState(false);
  const [isOpenResolucaoCargaHoraria, setIsOpenResolucaoCargaHoraria] =
    useState(false);

  const buttons: Button[] = [
    {
      title: 'RENP',
      isOpen: isOpenRENP,
      setIsOpen: setIsOpenRENP,
      informacao: <RENP />,
    },
    {
      title: 'LEP',
      isOpen: isOpenLEP,
      setIsOpen: setIsOpenLEP,
      informacao: <LEP />,
    },
    {
      title: 'Lei do Exercicio Profissional',
      isOpen: isOpenLeiExercicioProfissional,
      setIsOpen: setIsOpenLeiExercicioProfissional,
      informacao: <LeiExercicioProfissional />,
    },
    {
      title: 'PNAISP',
      isOpen: isOpenPNAISP,
      setIsOpen: setIsOpenPNAISP,
      informacao: <PNAISP />,
    },
    {
      title: 'Resolucao de Carga Horaria',
      isOpen: isOpenResolucaoCargaHoraria,
      setIsOpen: setIsOpenResolucaoCargaHoraria,
      informacao: <ResolucaoCargaHoraria />,
    },
  ];

  return (
    <View className={styles.screen}>
      <ScrollView>{buttonDropDown(buttons)}</ScrollView>
    </View>
  );
}
