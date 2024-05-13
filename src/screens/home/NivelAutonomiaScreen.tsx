import React from 'react';
import { Text, View } from 'react-native';
import ButtonHomeIcon from '../../components/ButtonHomeIcon';
import styles from '../../Styles/Styles';

interface Button {
  title: string;
  route: String;
  icon: any;
}

export default function NivelAutonomia() {
  const buttons: Button[] = [
    {
      title: 'Escala de Atividade de Enfermagem',
      route: 'EscalaAtividaEnfermagemScreen',
      icon: 'bar-chart',
    },
  ];
  return (
    <View className={styles.screen}>
      <Text className={styles.text}>
        {
          'Autonomia profissional se refere à capacidade de realizar suas tarefas de maneira independente, com a possibilidade de tomar decisões e agir a partir das suas habilidades e experiências.'
        }
      </Text>
      <View className={styles.viewHome}>{ButtonHomeIcon(buttons)}</View>
    </View>
  );
}
