import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import Resumo from './regimentoEnfermagem/Resumo';
import EscalaEnfermagem from './regimentoEnfermagem/EscalaEnfermagem';
import FichaFuncional from './regimentoEnfermagem/FichaFuncional';
import RegimentoEnfermagem from './regimentoEnfermagem/RegimentoEnfermagem';
import buttonDropDown from '../../../components/ButtonDropDown';
import styles from '../../Styles/Styles';

interface Button {
  title: string;
  setIsOpen: any;
  isOpen: boolean;
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
      informacao: <Resumo />,
    },
    {
      title: 'Escala de Enfermagem',
      isOpen: isOpenEscalaEnfermagem,
      setIsOpen: setIsOpenEscalaEnfermagem,
      informacao: <EscalaEnfermagem />,
    },
    {
      title: 'Ficha Funcional',
      isOpen: isOpenFichaFuncional,
      setIsOpen: setIsOpenFichaFuncional,
      informacao: <FichaFuncional />,
    },
    {
      title: 'Regimento de Enfermagem',
      isOpen: isOpenRegimentoEnfermagem,
      setIsOpen: setIsOpenRegimentoEnfermagem,
      informacao: <RegimentoEnfermagem />,
    },
  ];

  return (
    <View className={styles.screen}>
      <ScrollView>{buttonDropDown(buttons)}</ScrollView>
    </View>
  );
}

// style={{ color: 'black', fontSize: 18, fontWeight: 'bold', textAlign: 'left' }}
