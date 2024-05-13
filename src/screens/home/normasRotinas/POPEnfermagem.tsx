import React from 'react';
import { Text, View } from 'react-native';
import ButtonArrowforward from '../../../components/ButtonArrowForward';
import styles from '../../../Styles/Styles';

interface Button {
  title: string;
  route: String;
}

export default function POPEnfermagem() {
  const buttons: Button[] = [
    {
      title: 'POP Enfermagem',
      route: 'POPEnfermagem',
    },
  ];
  return (
    <View>
      <Text className={styles.text}>
        {
          'O Manual de Procedimentos Operacionais Padrão de Enfermagem caracteriza-se pela reunião de procedimentos frequentemente executados pela enfermagem nas unidades prisionais de Minas Gerais detalhando a forma correta de fazê-los. Insta salientar que esse documento será atualizado a cada dois anos ou sempre que houver necessidade. \nSaiba mais em:'
        }
      </Text>
      {ButtonArrowforward(buttons)}
    </View>
  );
}
