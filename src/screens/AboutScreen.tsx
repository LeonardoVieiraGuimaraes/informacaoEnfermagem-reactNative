import React from 'react';
import { View, Text } from 'react-native';
import styles from '../Styles/Styles';

export default function AboutScreen() {
  return (
    <View className={styles.screen}>
      <Text className={styles.text}>
        A&G Enfermagem é um instrumento para subsidiar o seu processo de
        trabalho através de informações gerais com o objetivo de apresentar as
        estratégias para alcançar o melhor nível de autonomia profissional e
        contribuir com a gestão da enfermagem.
      </Text>
    </View>
  );
}
