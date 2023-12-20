import React from 'react';
import { Text, View } from 'react-native';
import ButtonArrowforward from '../../../components/ButtonArrowforward';
import styles from '../../Styles/Styles';

interface Button {
  title: string;
  route: String;
}

export default function GuiaAtencaoPrimaria() {
  const buttons: Button[] = [
    {
      title: 'Guia de Atenção Primária',
      route: 'GuiaAtencaoPrimaria',
    },
  ];
  return (
    <View>
      <Text className={styles.text}>
        {
          'A atenção em saúde ocorre nas unidades prisionais no âmbito da atenção primária conforme Portaria Interministerial Nº1 de 2014. Com o objetivo de subsidiar os profissionais de enfermagem na condução das consultas de enfermagem o guia contempla 17 áreas clínicas com descrições referentes às atribuições da equipe de enfermagem, solicitação de exames e prescrições de medicamentos pelo enfermeiro, bem como, os principais diagnósticos de enfermagem e intervenções em cada área de atuação da APS. \nVeja mais em: '
        }
      </Text>
      {ButtonArrowforward(buttons)}
    </View>
  );
}
