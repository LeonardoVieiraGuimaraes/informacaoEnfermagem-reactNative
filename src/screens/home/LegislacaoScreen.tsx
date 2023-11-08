import React from 'react';
import { View } from 'react-native';
import { useState } from 'react';
import buttonDropDown from '../../components/ButtonDropDown';
import RENP from './legislacao/RENP';

// import Resumo from './regimentoEnfermagem/Resumo';
// import EscalaEnfermagem from './regimentoEnfermagem/EscalaEnfermagem';
// import FichaFuncional from './regimentoEnfermagem/FichaFuncional';
// import RegimentoEnfermagem from './regimentoEnfermagem/RegimentoEnfermagem';
// import buttonDropDown from '../../../components/ButtonDropDown';

interface Button {
  title: string;
  setIsOpen: any;
  isOpen: boolean;
  informacao: any;
}

export default function LegislacaoScreen() {
  const [isOpenRENP, setIsOpenRENP] = useState(false);
  // const [isOpenEscalaEnfermagem, setIsOpenEscalaEnfermagem] = useState(false);
  // const [isOpenFichaFuncional, setIsOpenFichaFuncional] = useState(false);
  // const [isOpenRegimentoEnfermagem, setIsOpenRegimentoEnfermagem] =
  //   useState(false);

  const buttons: Button[] = [
    {
      title: 'RENP',
      isOpen: isOpenRENP,
      setIsOpen: setIsOpenRENP,
      informacao: <RENP />,
    },
    // // {
    //   title: 'Escala de Enfermagem',
    //   isOpen: isOpenEscalaEnfermagem,
    //   setIsOpen: setIsOpenEscalaEnfermagem,
    //   informacao: <EscalaEnfermagem />,
    // },
    // {
    //   title: 'Ficha Funcional',
    //   isOpen: isOpenFichaFuncional,
    //   setIsOpen: setIsOpenFichaFuncional,
    //   informacao: <FichaFuncional />,
    // },
    // {
    //   title: 'Regimento de Enfermagem',
    //   isOpen: isOpenRegimentoEnfermagem,
    //   setIsOpen: setIsOpenRegimentoEnfermagem,
    //   informacao: <RegimentoEnfermagem />,
    // },
  ];

  return (
    <View className="flex-1 flex-row flex-wrap bg-blue-50">
      {buttonDropDown(buttons)}
    </View>
  );
}

// style={{ color: 'black', fontSize: 18, fontWeight: 'bold', textAlign: 'left' }}
