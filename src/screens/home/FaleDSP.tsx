import React from 'react';
import { View, Text, Linking, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../../assets/styles/styles';
import ButtonHomeIcon from '../../components/ButtonHomeIcon';

interface Button {
  title: string;
  route: any;
  icon: any;
}

export default function FaleDSPScreen() {
  const buttons: Button[] = [{ title: 'Email', route: 'email', icon: 'book' }];

  return <View className={styles.screen}>{ButtonHomeIcon(buttons)}</View>;
}
