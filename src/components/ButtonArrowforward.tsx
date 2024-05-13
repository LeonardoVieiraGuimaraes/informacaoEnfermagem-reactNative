import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationProp } from '../models/types';
import { useNavigation } from '@react-navigation/native';
import styles from '../Styles/Styles';

export default function buttonDropDown(buttons: any[]) {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View className={styles.buttonView}>
      {buttons.map((button, index) => (
        <TouchableOpacity
          key={index}
          className={styles.buttonArrowForward}
          onPress={() => {
            navigation.navigate(button.route);
          }}
        >
          <View className={styles.buttonViewArrowforwardItens}>
            <Text className={styles.buttonViewArrowforwardText}>
              {button.title}
            </Text>
            <Ionicons
              name={'arrow-forward'}
              size={styles.iconsSize}
              color={styles.iconsColor}
            />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
