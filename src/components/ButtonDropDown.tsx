import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function buttonDropDown(buttons: any[]) {
  return (
    <View className="flex gap-4 items-center justify-center">
      {buttons.map((button, index) => (
        <View className="w-full" key={index}>
          <TouchableOpacity
            className="bg-white w-full p-5"
            onPress={() => button.setIsOpen(!button.isOpen)}
          >
            <View className="flex flex-row justify-between items-center">
              <Text className="text-black text-lg font-semibold">
                {button.title}
              </Text>
              <Ionicons
                name={button.isOpen ? 'arrow-down' : 'arrow-up'}
                size={30}
                color="green"
              />
            </View>
          </TouchableOpacity>
          {button.isOpen && <View className="p-4">{button.informacao}</View>}
        </View>
      ))}
    </View>
  );
}
