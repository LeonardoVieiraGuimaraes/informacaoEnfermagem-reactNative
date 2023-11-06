import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import Resumo from './regimentoEnfermagem/Resumo';
import EscalaEnfermagem from './regimentoEnfermagem/EscalaEnfermagem';
import FichaFuncional from './regimentoEnfermagem/FichaFuncional';
import RegimentoEnfermagem from './regimentoEnfermagem/RegimentoEnfermagem';
import buttonDropDown from '../../../components/ButtonDropDown';

interface Button {
  title: string;
  setIsOpen: any;
  isOpen: boolean;
  icon_up: any;
  icon_down: any;
  informacao: any;
}

export default function NormasRotinas() {
  const [isOpenResumo, setIsOpenResumo] = useState(false);
  const [isOpenEscalaEnfermagem, setIsOpenEscalaEnfermagem] = useState(false);
  const [isOpenFichaFuncional, setIsOpenFichaFuncional] = useState(false);
  const [isOpenRegimentoEnfermagem, setIsOpenRegimentoEnfermagem] =
    useState(false);

  const buttons: Button[] = [
    {
      title: 'Resumo',
      isOpen: isOpenResumo,
      setIsOpen: setIsOpenResumo,
      icon_down: 'arrow-down',
      icon_up: 'arrow-up',
      informacao: <Resumo />,
    },
    {
      title: 'Escala de Enfermagem',
      isOpen: isOpenEscalaEnfermagem,
      setIsOpen: setIsOpenEscalaEnfermagem,
      icon_down: 'arrow-down',
      icon_up: 'arrow-up',
      informacao: <EscalaEnfermagem />,
    },
    {
      title: 'Ficha Funcional',
      isOpen: isOpenFichaFuncional,
      setIsOpen: setIsOpenFichaFuncional,
      icon_down: 'arrow-down',
      icon_up: 'arrow-up',
      informacao: <FichaFuncional />,
    },
    {
      title: 'Regimento de Enfermagem',
      isOpen: isOpenRegimentoEnfermagem,
      setIsOpen: setIsOpenRegimentoEnfermagem,
      icon_down: 'arrow-down',
      icon_up: 'arrow-up',
      informacao: <RegimentoEnfermagem />,
    },
  ];

  return (
    <View className="flex-1 flex-row flex-wrap bg-blue-50">
      {buttonDropDown(buttons)}
    </View>
  );
}

// style={{ color: 'black', fontSize: 18, fontWeight: 'bold', textAlign: 'left' }}
