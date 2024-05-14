import React from 'react';
import { View, Text } from 'react-native';
import { Circle } from '../../../components/Circle';
import styles from '../../../assets/styles/styles';

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
        <View className="flex-col">
          {circles.map((circle, index) => (
            <Circle key={index} color={circle.color} text={circle.text} />
          ))}
        </View>
        <View className="flex-1">
          <Text className="text-sm text-justify font-bold p-3">
            {`Você precisa desenvolver melhor suas habilidades mostrando sua competência e capacidade técnica. Neste sentido ficará evidente o quanto você é responsável. Aumentar o diálogo com os profissionais de saúde e segurança contribuirá para um ambiente organizacional mais tranquilo e poderá melhorar os resultados esperados com o seu trabalho.\nTudo isto favorecerá um sentimento de realização, melhor autonomia e organização do trabalho.`}
          </Text>
        </View>
      </View>
    </View>
  );
}
