import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import ButtonArrowForward from '../../components/ButtonArrowForward';
import ButtonDropDown from '../../components/ButtonDropDown';
import POPEnfermagem from './normasRotinas/POPEnfermagem';
import ManualTransporte from './normasRotinas/ManualTransporte';
import GuiaAtencaoPrimaria from './normasRotinas/GuiaAtencaoPrimaria';
import styles from '../../Styles/Styles';
interface Button {
  title: string;
  route: any;
}
interface Button1 {
  title: string;
  setIsOpen: any;
  isOpen: boolean;
  informacao: any;
}

export default function NormasRotinasScreen() {
  const [isOpenPOPEnfermagem, setIsOpenPOPEnfermagem] = useState(false);
  const [isOpenManualTransporte, setIsOpenManualTransporte] = useState(false);
  const [isOpenGuiaAtencaoPrimaria, setIsOpenGuiaAtencaoPrimaria] =
    useState(false);
  const buttons: Button[] = [
    {
      title: 'Regimento de Enfermagem',
      route: 'RegimentoEnfermagem',
    },
  ];

  const buttons1: Button1[] = [
    {
      title: 'POP Enfermagem',
      isOpen: isOpenPOPEnfermagem,
      setIsOpen: setIsOpenPOPEnfermagem,
      informacao: <POPEnfermagem />,
    },
    {
      title: 'Manual de Transporte',
      isOpen: isOpenManualTransporte,
      setIsOpen: setIsOpenManualTransporte,
      informacao: <ManualTransporte />,
    },
    {
      title: 'Guia de Atenção Primária',
      isOpen: isOpenGuiaAtencaoPrimaria,
      setIsOpen: setIsOpenGuiaAtencaoPrimaria,
      informacao: <GuiaAtencaoPrimaria />,
    },
  ];

  return (
    <View className={styles.screen}>
      <ScrollView className={styles.scrollView}>
        {ButtonArrowForward(buttons)}
        {ButtonDropDown(buttons1)}
      </ScrollView>
    </View>
  );
}
