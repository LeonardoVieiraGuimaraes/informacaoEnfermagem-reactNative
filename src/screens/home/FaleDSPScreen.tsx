import React from 'react';
import { View, Text, Linking, TouchableOpacity } from 'react-native';
import styles from '../../assets/styles/styles';
import ButtonIcon from '../../components/ButtonIcon';
import { Button } from '../../models/typesButton';

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

  const buttons: Button[] = [
    { title: 'Email', route: handlePress, icon: 'book' },
  ];

  return (
    <View className={styles.screen}>
      <View className={styles.viewTitle}>
        <Text className={styles.textTitle}>
          {'Fale com a Diretoria de Saúde Prisional (DSP)'}
        </Text>
      </View>

      {ButtonIcon(buttons)}
    </View>
  );
}
