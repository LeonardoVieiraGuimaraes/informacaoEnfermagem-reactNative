import React from 'react';
import { ScrollView, View } from 'react-native';
import { useState } from 'react';
import buttonDropDown from '../../components/ButtonDropDown';
import RENP from './legislacao/RENP';
import LEP from './legislacao/LEP';
import LeiExercicioProfissional from './legislacao/LeiExercicioProfissional';
import PNAISP from './legislacao/PNAISP';
import ResolucaoCargaHoraria from './legislacao/ResolucaoCargaHoraria';
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
  const [isOpenLEP, setIsOpenLEP] = useState(false);
  const [isOpenLeiExercicioProfissional, setIsOpenLeiExercicioProfissional] =
    useState(false);
  const [isOpenPNAISP, setIsOpenPNAISP] = useState(false);
  const [isOpenResolucaoCargaHoraria, setIsOpenResolucaoCargaHoraria] =
    useState(false);
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
    <ScrollView>
      <View>{buttonDropDown(buttons)}</View>
    </ScrollView>
  );
}

// style={{ color: 'black', fontSize: 18, fontWeight: 'bold', textAlign: 'left' }}
