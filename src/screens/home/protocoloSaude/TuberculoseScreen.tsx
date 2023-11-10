import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';

import BuscaAtiva from './tuberculose/BuscaAtiva';
import Diagnostico from './tuberculose/Diagnostico';
import Isolamento from './tuberculose/Isolamento';
import Tratamento from './tuberculose/Tratamento';
import OrientacaoTranferencia from './tuberculose/OrientacaoTranferencia';
import ButtonDropDown from '../../../components/ButtonDropDown';
import styles from '../../../../assets/Styles/Styles';

interface Button {
  title: string;
  setIsOpen: any;
  isOpen: boolean;
  icon_up: any;
  icon_down: any;
  informacao: any;
}

export default function NormasRotinasScreen() {
  const [isOpenBuscaAtiva, setIsOpenBuscaAtiva] = useState(false);
  const [isOpenDiagnostico, setIsOpenDiagnostico] = useState(false);
  const [isOpenFichaFuncional, setIsOpenFichaFuncional] = useState(false);
  const [isOpenTratamento, setIsOpenTratamento] = useState(false);
  const [isOpenOrientacaoTranferencia, setIsOpenOrientacaoTranferencia] =
    useState(false);

  const buttons: Button[] = [
    {
      title: 'Busca Ativa',
      isOpen: isOpenBuscaAtiva,
      setIsOpen: setIsOpenBuscaAtiva,
      icon_down: 'arrow-down',
      icon_up: 'arrow-up',
      informacao: <BuscaAtiva />,
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
      title: 'Isolamento',
      isOpen: isOpenFichaFuncional,
      setIsOpen: setIsOpenFichaFuncional,
      icon_down: 'arrow-down',
      icon_up: 'arrow-up',
      informacao: <Isolamento />,
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
