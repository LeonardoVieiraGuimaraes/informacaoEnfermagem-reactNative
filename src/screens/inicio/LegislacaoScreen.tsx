import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationProp } from "../../models/types";
import { useNavigation } from "@react-navigation/native";

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
    <View className="flex-1 flex-row flex-wrap h-screen items-center justify-center content-center m-4">
      {buttons.map((button, index) => (
        <TouchableOpacity
          key={index}
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
              name={button.icon}
              size={40}
              color="green"
              className="mr-3 basis-1/2"
            />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
