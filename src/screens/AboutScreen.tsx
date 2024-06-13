import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../assets/styles/styles';

export default function AboutScreen() {
  return (
    <View className={styles.viewAbout}>
      <Text className={styles.textTitle}>
        {'Bem Vindo ao A&G Enfermagem (Autonomia e Gestão na Enfermagem)'}
      </Text>

      <Text className="text-lg text-justify">
        {
          'Este é um instrumento para subsidiar o seu processo de trabalho por meio de informações gerais com o objetivo de apresentar as estratégias para alcançar o melhor nível de autonomia e contribuir com a gestão da enfermagem.\n'
        }
      </Text>
      <Text className="text-lg  text-center font-bold">{'Produção:'}</Text>
      <Text className="text-lg  text-center">
        {
          'Leslie Diniz Alves\nLeonardo Vieira Guimarães \nSérgio Valverde M. Santos'
        }
      </Text>
      <Text className="text-lg  text-center font-bold">{'\nApoio:'}</Text>

      <Image
        source={require('../assets/img/Logos2.jpg')}
        style={{ transform: [{ scale: 0.8 }] }} // Reduz a imagem para 50% do tamanho original
      />
    </View>
  );
}
