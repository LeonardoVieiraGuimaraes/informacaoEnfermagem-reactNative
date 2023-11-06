import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationProp } from '../models/types';
import { useNavigation } from '@react-navigation/native';

export default function buttonDropDown(buttons: any[]) {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View className="flex-1 flex-row flex-wrap h-screen gap-6 items-center justify-center">
      {buttons.map((button, index) => (
        <TouchableOpacity
          key={index}
          className="bg-white rounded-lg shadow-lg items-center justify-center w-36 h-36"
          onPress={() => {
            navigation.navigate(button.route);
          }}
        >
          <Ionicons
            name={button.icon}
            size={40}
            color="green"
            className="mr-3"
          />
          <Text className="text-black text-lg font-semibold">
            {button.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
