import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ButtonDropDown(buttons: any[]) {
  return (
    <ScrollView>
      <View className="flex gap-4 items-center justify-center mt-2">
        {buttons.map((button, index) => (
          <View className="w-11/12" key={index}>
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
                  size={28}
                  color="green"
                />
              </View>
            </TouchableOpacity>
            {button.isOpen && <View className="p-4">{button.informacao}</View>}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
