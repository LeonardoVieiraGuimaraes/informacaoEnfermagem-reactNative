import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../assets/styles/styles';

export default function AboutScreen() {
  return (
    <View className={styles.viewAbout}>
      <View className={styles.viewTitle}>
        <Text className={styles.textTitle}>
          {'Bem Vindo ao A&G Enfermagem (Autonomia e Gestão na Enfermagem)'}
        </Text>
      </View>
      <Text className="text-sm text-justify p-2">
        {
          'Este é um instrumento para subsidiar o seu processo de trabalho por meio de informações gerais com o objetivo de apresentar as estratégias para alcançar o melhor nível de autonomia e contribuir com a gestão da enfermagem.\n'
        }
      </Text>
      <Text className="text-sm  text-center font-bold">{'Produção:'}</Text>
      <Text className="text-sm text-center">
        {
          'Leslie Diniz Alves\nLeonardo Vieira Guimarães \nSérgio Valverde M. Santos'
        }
      </Text>
      <Text className="text-sm  text-center font-bold">{'\nApoio:'}</Text>

      <View className="items-center">
        <Image
          source={require('../assets/img/EERPSF.png')}
          style={{
            transform: [{ scale: 0.5 }],
            marginBottom: -90,
            marginTop: -50,
          }} // Reduz a margem inferior para aproximar as imagens
        />
        <Image
          source={require('../assets/img/MestradoSF.png')}
          style={{ transform: [{ scale: 0.5 }], marginBottom: -90 }} // Reduz a margem inferior para aproximar as imagens
        />
        <Image
          source={require('../assets/img/MinasGeraisSF.png')}
          style={{
            transform: [{ scale: 0.5 }],
            marginBottom: -70,
          }} // Reduz a margem inferior para aproximar as imagens
        />
      </View>
    </View>
  );
}
