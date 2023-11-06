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

export default function LegislacaoScreen() {
  const navigation = useNavigation<NavigationProp>();
  const buttons: Button[] = [
    { title: "RENP", route: "RENP", icon: "arrow-forward" },
    { title: "LEP", route: "LEP", icon: "arrow-forward" },
    {
      title: "Lei do Exercício Profissional",
      route: "LeiExercicioProfissional",
      icon: "arrow-forward",
    },
    { title: "PNAISP", route: "PNAISP", icon: "arrow-forward" },
    {
      title: "Resolução de Carga Horária",
      route: "ResolucaoCargaHoraria",
      icon: "arrow-forward",
    },
  ];

  return (
    <View className="flex-1 flex-row flex-wrap bg-blue-50">
      {ButtonSecond(buttons)}
    </View>
  );
}
