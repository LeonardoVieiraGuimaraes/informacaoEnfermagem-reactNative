import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationProp } from "../../models/types";
import { useNavigation } from "@react-navigation/native";
import ButtonSecond from "../../components/ButtonSecond";

interface Button {
  title: string;
  route: any;
  icon: any;
}

export default function ProtocolosSaudeScreen() {
  const navigation = useNavigation<NavigationProp>();
  const buttons: Button[] = [
    { title: "Tuberculose", route: "Tuberculose", icon: "arrow-forward" },
    { title: "IST-HIV-Aids", route: "ISTHIVAids", icon: "arrow-forward" },
    {
      title: "Escabiose",
      route: "Escabiose",
      icon: "arrow-forward",
    },
  ];

  return (
    <View className="flex-1 flex-row flex-wrap bg-blue-50">
      {ButtonSecond(buttons)}
    </View>
  );
}
