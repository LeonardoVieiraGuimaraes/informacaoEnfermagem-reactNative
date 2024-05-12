import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationProp } from '../models/types';
import { useNavigation } from '@react-navigation/native';
import styles from '../Styles/Styles';

export default function buttonDropDown(buttons: any[]) {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View className={styles.buttonViewHome}>
      {buttons.map((button, index) => (
        <TouchableOpacity
          className={styles.buttonHome}
          key={index}
          onPress={() => {
            navigation.navigate(button.route);
          }}
        >
          <Ionicons
            name={button.icon}
            size={40}
            color="darkgreen"
            className="mr-3"
          />
          <Text className={styles.buttonTextHome}>{button.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
