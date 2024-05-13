import React from 'react';
import { View, Text } from 'react-native';
import styles from '../Styles/Styles';

export default function AboutScreen() {
  return (
    <View className={styles.viewAbout}>
      <View className={styles.viewTitle}>
        <Text className={styles.textTitle}>
          {'Bem Vindo ao A&G Enfermagem (Autonomia e Gestão na Enfermagem)'}
        </Text>
      </View>
      <View className={styles.viewText}>
        <Text className={styles.text}>
          {
            'Este é um instrumento para subsidiar o seu processo de trabalho por meio de informações gerais com o objetivo de apresentar as estratégias para alcançar o melhor nível de autonomia e contribuir com a gestão da enfermagem.'
          }
        </Text>
      </View>
    </View>
  );
}
