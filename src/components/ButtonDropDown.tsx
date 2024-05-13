import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../Styles/Styles';

export default function ButtonDropDown(buttons: any[]) {
  return (
    <View className={styles.ViewDropDown}>
      {buttons.map((button, index) => (
        <View className={styles.buttonViewDropDown} key={index}>
          <TouchableOpacity onPress={() => button.setIsOpen(!button.isOpen)}>
            <View className={styles.buttonDropDownItens}>
              <Text className={styles.buttonViewDropDownText}>
                {button.title}
              </Text>
              <Ionicons
                name={button.isOpen ? 'arrow-down' : 'arrow-up'}
                size={styles.iconsSize}
                color={styles.iconsColor}
              />
            </View>
          </TouchableOpacity>
          {button.isOpen && <View>{button.informacao}</View>}
        </View>
      ))}
    </View>
  );
}
