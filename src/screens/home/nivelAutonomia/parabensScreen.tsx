import React from 'react';
import { View, Text } from 'react-native';
import { Circle } from '../../../components/Circle';
import styles from '../../../Styles/Styles';

export default function ParabensScreen() {
  const circles = [
    {
      color: 'bg-red-500',
      text: '',
    },
    { color: 'bg-yellow-500', text: '' },
    { color: 'bg-green-500', text: 'Nível Alto de Autonomia' },
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
            {`Você é capaz de executar a gestão do seu trabalho com autonomia gerando mais resultados e contribuindo para uma assistência qualificada.`}
          </Text>
        </View>
      </View>
    </View>
  );
}
