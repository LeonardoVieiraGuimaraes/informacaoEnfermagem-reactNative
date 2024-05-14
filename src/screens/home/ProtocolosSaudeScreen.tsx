import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationProp } from '../../models/types';
import { useNavigation } from '@react-navigation/native';
import ButtonArrowforward from '../../components/ButtonArrowforward';
import styles from '../../assets/styles/styles';
import { Button } from '../../models/typesButton';

export default function ProtocolosSaudeScreen() {
  const navigation = useNavigation<NavigationProp>();
  const buttons: Button[] = [
    {
      title: 'Tuberculose',
      route: 'Tuberculose',
      icon: undefined,
    },
    {
      title: 'IST-HIV-Aids',
      route: 'ISTHIVAids',
      icon: undefined,
    },
    {
      title: 'Escabiose',
      route: 'Escabiose',
      icon: undefined,
    },
  ];

  return (
    <View className={styles.screen}>
      <ScrollView className={styles.scrollView}>
        {ButtonArrowforward(buttons)}
      </ScrollView>
    </View>
  );
}
