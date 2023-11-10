import React from 'react';
import { View, Text } from 'react-native';
import { Circle } from '../../../components/Circle';
import styles from '../../../../assets/Styles/Styles';

export default function VoceConsegueScreen() {
  const circles = [
    {
      color: 'bg-red-500',
      text: 'Nível Baixo de Autonomia',
    },
    { color: 'bg-yellow-500', text: '' },
    { color: 'bg-green-500', text: '' },
  ];
  return (
    <View className={styles.screen}>
      <View className="flex-1 flex-row items-center">
        <View className="flex-1 flex-col">
          {circles.map((circle, index) => (
            <Circle key={index} color={circle.color} text={circle.text} />
          ))}
        </View>
        <View className="flex-1">
          <Text className={styles.text}>
            'Você precisa desenvolver melhor suas habilidades mostrando sua
            competência e capacidade técnica. Neste sentido ficará vidente o
            quanto você é responsáivel. Aumentar o diálogo com os profissionais
            de saúde e segurança contribuirá um ambiente organizacional mais
            tranquilo e poderá melhorar os resultados esperados com o seu
            trabalho. Tudo isto favorecerá sentimento de realização, melhor
            autonomia e organização de trabalho.
          </Text>
        </View>
      </View>
    </View>
  );
}
