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

export default function NormasRotinasScreen() {
  const navigation = useNavigation<NavigationProp>();
  const buttons: Button[] = [
    { title: "Regimento de Enfermagem", route: "RegimentoEnfermagem", icon: "arrow-forward" },
    { title: "POP Enfermagem", route: "POPEnfermagem", icon: "arrow-forward" },
    {
      title: "Manual de Transporte",
      route: "ManualTransporte",
      icon: "arrow-forward",
    },
    { title: "Guia de Atenção Primária", route: "GuiaAtencaoPrimaria", icon: "arrow-forward" },
  ];

  return (
    <View className="flex-1 flex-row flex-wrap bg-blue-50">
    {ButtonSecond(buttons)}
  </View>
  );
}
