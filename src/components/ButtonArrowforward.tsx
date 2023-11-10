import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationProp } from '../models/types';
import { useNavigation } from '@react-navigation/native';

export default function buttonDropDown(buttons: any[]) {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View className="flex pb-4 gap-4 items-center justify-center">
      {buttons.map((button, index) => (
        <TouchableOpacity
          key={index}
          className="bg-white w-full p-5"
          onPress={() => {
            navigation.navigate(button.route);
          }}
        >
          <View className="flex flex-row items-center justify-between">
            <Text className="text-black text-lg font-semibold">
              {button.title}
            </Text>
            <Ionicons name={'arrow-forward'} size={30} color="green" />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
