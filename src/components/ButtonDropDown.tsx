import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function buttonDropDown(buttons: any[]) {
  return buttons.map((button, index) => (
    <View key={index} className="shadow-lg w-full p-3 bg-blue-50">
      <TouchableOpacity key={index} onPress={() => button.setIsOpen(!button.isOpen)}>
        <View className="flex flex-row justify-between bg-blue-100 p-3 rounded-lg">
          <Text className="text-black text-lg font-semibold text-left">
            {button.title}
          </Text>
          <Ionicons name={button.isOpen ? button.icon_up : button.icon_down} size={24} color="green" />
        </View>
      </TouchableOpacity>
      {button.isOpen && <Text className="text-black font-semibold text-justify m-2">{button.informacao}</Text>}
    </View>
  ));
}
