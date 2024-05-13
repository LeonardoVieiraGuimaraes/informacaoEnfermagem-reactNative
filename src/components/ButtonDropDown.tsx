import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../Styles/Styles';

export default function ButtonDropDown(buttons: any[]) {
  return (
    <View className={styles.buttonView}>
      {buttons.map((button, index) => (
        <View className={styles.buttonViewDropDown} key={index}>
          <TouchableOpacity
            className="bg-white rounded-2xl p-5"
            onPress={() => button.setIsOpen(!button.isOpen)}
          >
            <View className="flex flex-row justify-between items-center">
              <Text className="text-black text-lg font-semibold">
                {button.title}
              </Text>
              <Ionicons
                name={button.isOpen ? 'arrow-down' : 'arrow-up'}
                size={styles.iconsSize}
                color={styles.iconsColor}
              />
            </View>
          </TouchableOpacity>
          {button.isOpen && <View className="p-4">{button.informacao}</View>}
        </View>
      ))}
    </View>
  );
}
