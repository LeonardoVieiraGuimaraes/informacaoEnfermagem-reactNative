import React from 'react';
import { View, Text } from 'react-native';
import { Circle } from '../../../components/Circle';
import styles from '../../../Styles/Styles';

export default function QuaseLaScreen() {
  const circles = [
    {
      color: 'bg-red-500',
      text: '',
    },
    { color: 'bg-yellow-500', text: 'Nível médio de Autonomia' },
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
            {`Você pode alcançar melhores resultados, gerenciando seu trabalho e utilizando seu conhecimento técnico. Crie metas, mantenha o diálogo equilibrado com a equipe de saúde e segurança e continue confiando no êxito do seu trabalho`}
          </Text>
        </View>
      </View>
    </View>
  );
}
