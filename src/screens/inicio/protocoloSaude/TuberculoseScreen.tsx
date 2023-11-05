import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";



import BuscaAtiva from "./tuberculose/BuscaAtiva";
import Diagnostico from "./tuberculose/Diagnostico";
import Isolamento from "./tuberculose/Isolamento";
import Tratamento from "./tuberculose/Tratamento";
import OrientacaoTranferencia from "./tuberculose/OrientacaoTranferencia";


interface Button {
  title: string;
  setIsOpen: any;
  isOpen: boolean;
  icon_up: any;
  icon_down: any;
  informacao: any;
}

export default function NormasRotinasScreen() {
  const [isOpenBuscaAtiva, setIsOpenBuscaAtiva] = useState(false);
  const [isOpenDiagnostico, setIsOpenDiagnostico] = useState(false);
  const [isOpenFichaFuncional, setIsOpenFichaFuncional] = useState(false);
  const [isOpenTratamento, setIsOpenTratamento] = useState(false);
  const [isOpenOrientacaoTranferencia, setIsOpenOrientacaoTranferencia] = useState(false);

  const buttons: Button[] = [
    { title: "Busca Ativa", isOpen: isOpenBuscaAtiva, setIsOpen: setIsOpenBuscaAtiva,  icon_down: "arrow-down", icon_up :"arrow-up", informacao: <BuscaAtiva /> },
    { title: "Diagnóstico", isOpen: isOpenDiagnostico, setIsOpen: setIsOpenDiagnostico, icon_down: "arrow-down", icon_up :"arrow-up", informacao: < Diagnostico/> }, 
    { title: "Isolamento", isOpen: isOpenFichaFuncional, setIsOpen: setIsOpenFichaFuncional, icon_down: "arrow-down", icon_up :"arrow-up", informacao: < Isolamento/> },
    { title: "Tratamento", isOpen: isOpenTratamento, setIsOpen: setIsOpenTratamento, icon_down: "arrow-down", icon_up :"arrow-up", informacao: < Tratamento /> },
    { title: "Orientacao para Tranferencia", isOpen: isOpenOrientacaoTranferencia, setIsOpen: setIsOpenOrientacaoTranferencia, icon_down: "arrow-down", icon_up :"arrow-up", informacao: < OrientacaoTranferencia /> }
  ];

  return (
   <View className="flex-1 flex-row flex-wrap bg-blue-50">
      {buttons.map((button, index) => (
        <View
          key={index}
          className="shadow-lg w-full p-3 bg-blue-50"
          >
          <TouchableOpacity key={index} onPress={() => button.setIsOpen(!button.isOpen)}>
          <View className="flex flex-row justify-between bg-blue-100 p-3 rounded-lg">
            
            <Text className="text-black text-lg font-semibold text-left">
              {button.title}
            </Text>
            <Ionicons name={button.isOpen ? button.icon_up : button.icon_down} size={24} color="green" />
          </View >
          </TouchableOpacity>
          {button.isOpen && <Text className="text-black font-semibold text-justify m-2">{button.informacao}</Text>}
        </View>
      ))}
    </View>
  );
}

// style={{ color: 'black', fontSize: 18, fontWeight: 'bold', textAlign: 'left' }}