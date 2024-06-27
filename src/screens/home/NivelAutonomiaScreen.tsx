import React from 'react';
import { Text, View } from 'react-native';
import ButtonHomeIcon from '../../components/ButtonHomeIcon';
import styles from '../../assets/styles/styles';
import { Button } from '../../models/typesButton';
import ButtonIcon from '../../components/ButtonIcon';

export default function NivelAutonomia() {
  const buttons: Button[] = [
    {
      title: 'Escala de Atividade de Enfermagem',
      route: 'EscalaAtividaEnfermagemScreen',
      icon: 'bar-chart',
    },
  ];
  //   return (
  //     <View className={styles.viewAbout}>
  //       <Text className={styles.textTitle}>
  //         {'Bem Vindo ao A&G Enfermagem (Autonomia e Gestão na Enfermagem)'}
  //       </Text>

  //       <Text className="text-sm text-justify p-2">
  //         {
  //           'Autonomia profissional se refere à capacidade de realizar suas tarefas de maneira independente, com a possibilidade de tomar decisões e agir a partir das suas habilidades e experiências.'
  //         }
  //       </Text>
  //       {ButtonHomeIcon(buttons)}
  //     </View>
  //   );
  // }

  return (
    <View className={styles.screen}>
      <Text className="text-lg text-justify p-2 my-4 mx-4">
        {
          'Autonomia profissional se refere à capacidade de realizar suas tarefas de maneira independente, com a possibilidade de tomar decisões e agir a partir das suas habilidades e experiências.'
        }
      </Text>
      <View>{ButtonHomeIcon(buttons)}</View>
      <View>
        <Text className="text-lg text-center p-2 my-4 mx-4">
          {
            ' Nursing Activity Scale\nRIBEIRO, JMS. Autonomia profissional dos enfermeiros.\nReferência - Revista de Enfermagem, vol. III, núm. 5, dezembro, 2011, pp. 27-36.'
          }
        </Text>
      </View>
    </View>
  );
}
