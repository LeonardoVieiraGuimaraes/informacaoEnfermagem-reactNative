import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationProp } from '../models/types';
import { useNavigation } from '@react-navigation/native';

export default function buttonDropDown(buttons: any[]) {
  const navigation = useNavigation<NavigationProp>();
  return buttons.map((button, index) => (
    <View
      key={index}
      className="flex-1 flex-row flex-wrap h-screen items-center justify-center m-4"
    >
      <TouchableOpacity
        className="bg-white rounded-lg shadow-lg w-full p-3 m-3"
        onPress={() => {
          navigation.navigate(button.route);
        }}
      >
        <View className="flex flex-row items-center justify-between">
          <Text className="text-black text-lg font-semibold text-left">
            {button.title}
          </Text>
          <Ionicons
            name={'arrow-forward'}
            size={40}
            color="green"
            className="mr-3 basis-1/2"
          />
        </View>
      </TouchableOpacity>
    </View>
  ));
}
