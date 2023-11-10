import React from 'react';
import { View, Text } from 'react-native';

interface ColoredCircleProps {
  color: string;
  text: string;
}

export function Circle({ color, text }: ColoredCircleProps) {
  return (
    <View className="p-2">
      <View
        className={`w-32 h-32 ${color} rounded-full items-center justify-center`}
      >
        <Text className="text-center">{text}</Text>
      </View>
    </View>
  );
}
