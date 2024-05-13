import React from 'react';
import { Text, View } from 'react-native';
import ButtonArrowforward from '../../../../components/ButtonArrowForward';
import styles from '../../../../Styles/Styles';

interface Button {
  title: string;
  route: String;
}

export default function Resumo() {
  const buttons: Button[] = [
    // {
    //   title: 'Escala de Enfermagem',
    //   route: 'EscalaEnfermagem',
    // },
  ];
  return (
    <View>
      <Text className={styles.text}>
        A importância do Regimento Interno do Serviço de Enfermagem como
        instrumento de gestão é inegável, uma vez que não apenas orienta o
        processo de trabalho da equipe, como também atende aos aspectos legais
        necessários ao seu funcionamento. A efetiva utilização deste documento
        contribui significativamente para a qualidade dos cuidados prestados e
        segurança dos pacientes.
      </Text>
      {/* {ButtonArrowforward(buttons)} */}
    </View>
  );
}
