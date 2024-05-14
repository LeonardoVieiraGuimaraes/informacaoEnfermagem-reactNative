import React from 'react';
import { View, Text } from 'react-native';
import styles from '../assets/styles/styles';

interface ColoredCircleProps {
  color: string;
  text: string;
}

export function Circle({ color, text }: ColoredCircleProps) {
  return (
    <View className="p-2">
      <View className={`${styles.cicle} ${color}`}>
        <Text className="text-center text-lg">{text}</Text>
      </View>
    </View>
  );
}
