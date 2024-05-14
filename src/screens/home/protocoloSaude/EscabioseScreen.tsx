import React from 'react';
import { View, ScrollView } from 'react-native';
import { useState } from 'react';

import ButtonDropDown from '../../../components/ButtonDropDown';
import BuscaAtivaDiagnostico from './escabiose/BuscaAtivaDiagnostico';
import Tratamento from './escabiose/Tratamento';
import Isolamento from './escabiose/Isolamento';
import MedidasControle from './escabiose/MedidasControle';
import styles from '../../../assets/styles/styles';

interface Button {
  title: string;
  setIsOpen: any;
  isOpen: boolean;
  informacao: any;
}

export default function EscabioseScreen() {
  const [isOpenBuscaAtivaDiagnostico, setIsOpenBuscaAtivaDiagnostico] =
    useState(false);
  const [isOpenTratamento, setIsOpenTratamento] = useState(false);
  const [isOpenIsolamento, setIsOpenIsolamento] = useState(false);
  const [isOpenMedidasControle, setIsOpenMedidasControle] = useState(false);

  const [isOpenOrientacaoTranferencia, setIsOpenOrientacaoTranferencia] =
    useState(false);

  const buttons: Button[] = [
    {
      title: 'Busca Ativa e Diagnóstico',
      isOpen: isOpenBuscaAtivaDiagnostico,
      setIsOpen: setIsOpenBuscaAtivaDiagnostico,

      informacao: <BuscaAtivaDiagnostico />,
    },
    {
      title: 'Tratamento',
      isOpen: isOpenTratamento,
      setIsOpen: setIsOpenTratamento,
      informacao: <Tratamento />,
    },
    {
      title: 'Isolamento',
      isOpen: isOpenIsolamento,
      setIsOpen: setIsOpenIsolamento,
      informacao: <Isolamento />,
    },

    {
      title: 'Meidas de Controle',
      isOpen: isOpenMedidasControle,
      setIsOpen: setIsOpenMedidasControle,
      informacao: <MedidasControle />,
    },
  ];

  return (
    <View className={styles.screen}>
      <ScrollView>{ButtonDropDown(buttons)}</ScrollView>
    </View>
  );
}
