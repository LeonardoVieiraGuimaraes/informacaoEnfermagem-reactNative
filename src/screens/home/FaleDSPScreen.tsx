import React from 'react';
import { View, Text, Button, Linking } from 'react-native';
import styles from '../Styles/Styles';

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
      {/* <Text className={styles.text}>Fale com:</Text> */}
      <Button title="Enviar e-mail" onPress={handlePress} />
    </View>
  );
}
