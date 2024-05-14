import React from 'react';
import { View, Text, Linking, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../../assets/styles/styles';
import ButtonArrowforward from '../../components/ButtonArrowforward';
import ButtonHomeIcon from '../../components/ButtonHomeIcon';
import ButtonIcon from '../../components/ButtonIcon';

interface Button {
  title: string;
  route: any;
  icon: any;
}

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

  return <View className={styles.screen}>{ButtonIcon(buttons)}</View>;
}
