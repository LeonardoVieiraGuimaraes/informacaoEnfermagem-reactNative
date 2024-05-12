import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';

import Treinamento from './isthivaids/Treinamento';
import Diagnostico from './isthivaids/Diagnostico';
import Tratamento from './isthivaids/Tratamento';
import Prevencao from './isthivaids/Prevencao';
import OrientacaoTranferencia from './isthivaids/OrientacaoTranferencia';
import ButtonDropDown from '../../../components/ButtonDropDown';
import styles from '../../../Styles/Styles';

interface Button {
  title: string;
  setIsOpen: any;
  isOpen: boolean;
  icon_up: any;
  icon_down: any;
  informacao: any;
}

export default function NormasRotinasScreen() {
  const [isOpenTreinamento, setIsOpenTreinamento] = useState(false);
  const [isOpenDiagnostico, setIsOpenDiagnostico] = useState(false);
  const [isOpenPrevencao, setIsOpenPrevencao] = useState(false);
  const [isOpenTratamento, setIsOpenTratamento] = useState(false);
  const [isOpenOrientacaoTranferencia, setIsOpenOrientacaoTranferencia] =
    useState(false);

  const buttons: Button[] = [
    {
      title: 'Treinamento',
      isOpen: isOpenTreinamento,
      setIsOpen: setIsOpenTreinamento,
      icon_down: 'arrow-down',
      icon_up: 'arrow-up',
      informacao: <Treinamento />,
    },
    {
      title: 'Diagnóstico',
      isOpen: isOpenDiagnostico,
      setIsOpen: setIsOpenDiagnostico,
      icon_down: 'arrow-down',
      icon_up: 'arrow-up',
      informacao: <Diagnostico />,
    },
    {
      title: 'Tratamento',
      isOpen: isOpenTratamento,
      setIsOpen: setIsOpenTratamento,
      icon_down: 'arrow-down',
      icon_up: 'arrow-up',
      informacao: <Tratamento />,
    },
    {
      title: 'Prevenção',
      isOpen: isOpenPrevencao,
      setIsOpen: setIsOpenPrevencao,
      icon_down: 'arrow-down',
      icon_up: 'arrow-up',
      informacao: <Prevencao />,
    },

    {
      title: 'Orientacao para Tranferencia',
      isOpen: isOpenOrientacaoTranferencia,
      setIsOpen: setIsOpenOrientacaoTranferencia,
      icon_down: 'arrow-down',
      icon_up: 'arrow-up',
      informacao: <OrientacaoTranferencia />,
    },
  ];

  return (
    <View className={styles.screen}>
      <ScrollView>{ButtonDropDown(buttons)}</ScrollView>
    </View>
  );
}
