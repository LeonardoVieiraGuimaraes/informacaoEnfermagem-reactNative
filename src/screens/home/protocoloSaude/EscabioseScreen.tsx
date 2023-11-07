import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';

import ButtonDropDown from '../../../components/ButtonDropDown';
import BuscaAtivaDiagnostico from './escabiose/BuscaAtivaDiagnostico';
import Tratamento from './escabiose/Tratamento';
import Isolamento from './escabiose/Isolamento';
import MedidasControle from './escabiose/MedidasControle';

interface Button {
  title: string;
  setIsOpen: any;
  isOpen: boolean;
  icon_up: any;
  icon_down: any;
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
      icon_down: 'arrow-down',
      icon_up: 'arrow-up',
      informacao: <BuscaAtivaDiagnostico />,
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
      title: 'Isolamento',
      isOpen: isOpenIsolamento,
      setIsOpen: setIsOpenIsolamento,
      icon_down: 'arrow-down',
      icon_up: 'arrow-up',
      informacao: <Isolamento />,
    },

    {
      title: 'Meidas de Controle',
      isOpen: isOpenMedidasControle,
      setIsOpen: setIsOpenMedidasControle,
      icon_down: 'arrow-down',
      icon_up: 'arrow-up',
      informacao: <MedidasControle />,
    },
  ];

  return (
    <ScrollView>
      <View className="flex-1 flex-row flex-wrap bg-blue-50">
        {ButtonDropDown(buttons)}
      </View>
    </ScrollView>
  );
}
