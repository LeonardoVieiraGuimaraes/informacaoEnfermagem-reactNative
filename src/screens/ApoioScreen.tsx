import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../assets/styles/styles';

export default function ApoioParticipacao() {
  return (
    <View className={styles.viewAbout}>
      <View className={styles.viewTitle}>
        <Text className={styles.textTitle}>
          {'Bem Vindo ao A&G Enfermagem (Autonomia e Gestão na Enfermagem)'}
        </Text>
      </View>
      <View>
        <Text className="text-center">
          {
            'Produção:\nLeslie Diniz Alves\nLeonardo Vieira Guimarães\nSérgio Valverde M. Santos'
          }

          {'\nApoio:'}
        </Text>
        <View className="flex-row justify-between w-1/4 h-16">
          <Image
            source={require('../assets/img/Logo mestrado profissional.png')}
            style={{ width: '150%', height: '50%' }}
          />
          <Image
            source={require('../assets/img/principal.png')}
            style={{ width: '150%', height: '50%' }}
          />
          <Image
            source={require('../assets/img/EERP USP.png')}
            style={{ width: '100%', height: '50%' }}
          />
        </View>
      </View>
    </View>
  );
}
