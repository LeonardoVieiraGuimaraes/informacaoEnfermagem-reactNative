import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationProp } from '../../models/types';
import { useNavigation } from '@react-navigation/native';
import ButtonSecond from '../../components/ButtonArrowforward';
import styles from '../../../assets/Styles/Styles';

interface Button {
  title: string;
  route: any;
}

export default function ProtocolosSaudeScreen() {
  const navigation = useNavigation<NavigationProp>();
  const buttons: Button[] = [
    { title: 'Tuberculose', route: 'Tuberculose' },
    { title: 'IST-HIV-Aids', route: 'ISTHIVAids' },
    {
      title: 'Escabiose',
      route: 'Escabiose',
    },
  ];

  return (
    <View className={styles.screen}>
      <ScrollView>{ButtonSecond(buttons)}</ScrollView>
    </View>
  );
}
