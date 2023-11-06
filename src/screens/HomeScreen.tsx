import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationProp } from "../models/types";
import { useNavigation } from '@react-navigation/native';
import ButtonPrimary from "../components/ButtonPrimary";

interface Button {
  title: string;
  route: any;
  icon: any;
}

export default function InicioScreen() {
  const navigation = useNavigation<NavigationProp>();
  const buttons: Button[] = [
    { title: "Legilação", route: "Legislacao", icon: "book" },
    { title: "Normas e Rotinas", route: "NormasRotinas", icon: "list" },
    { title: "Protocolo de Saúde", route: "ProtocolosSaude", icon: "medkit" },
    { title: "Nível de Autonomia", route: "NivelAutonomia", icon: "bar-chart" },
    { title: "Fale com a DSP", route: "FaleDSP", icon: "call" },
  ];
  
  return (
    <View className="flex-1 flex-row flex-wrap bg-blue-50">
      {ButtonPrimary(buttons)}
    </View>
  );
}
