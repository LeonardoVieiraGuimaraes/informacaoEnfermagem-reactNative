import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationProp } from '../models/types';
import { useNavigation } from '@react-navigation/native';
import styles from '../Styles/Styles';

export default function buttonDropDown(buttons: any[]) {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View className="flex gap-4 items-center mt-2">
      {buttons.map((button, index) => (
        <TouchableOpacity
          key={index}
          className="bg-white w-11/12 rounded-2xl p-5"
          onPress={() => {
            navigation.navigate(button.route);
          }}
        >
          <View className="flex-row items-center justify-between">
            <Text className="text-black text-lg font-semibold">
              {button.title}
            </Text>
            <Ionicons name={'arrow-forward'} size={28} color="green" />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
