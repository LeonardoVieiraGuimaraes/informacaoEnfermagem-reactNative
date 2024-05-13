import React from 'react';
import { View, Text, Button, Linking, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../../Styles/Styles';

export default function FaleDSPScreen() {
  const handlePress = () => {
    const email = 'dspsaip@seguranca.mg.gov.br';
    const subject = encodeURIComponent('Assunto do e-mail');
    const body = encodeURIComponent('Corpo do e-mail');
    const url = `mailto:${email}?subject=${subject}&body=${body}`;

    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log(`Não foi possível abrir a URL: ${url}`);
      }
    });
  };

  return (
    <View className={styles.screen}>
      <TouchableOpacity
        onPress={handlePress}
        className={styles.buttonArrowForward}
      >
        <View className={styles.buttonViewArrowforwardItens}>
          <Text className={styles.buttonViewArrowforwardText}>
            Enviar Email
          </Text>
          <MaterialCommunityIcons name="email" size={24} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
}
