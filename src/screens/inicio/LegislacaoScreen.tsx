// import React from "react";
// import { View, Text, TouchableOpacity, Linking } from "react-native";
// import Ionicons from "@expo/vector-icons/Ionicons";

// interface Button {
//   title: string;
//   route: string;
//   icon: any;
// }

// export default function LegislacaoScreen() {
//   const buttons: Button[] = [
//     { title: "RENP", route: "RENP", icon: "" },
//     { title: "LEP", route: "", icon: "" },
//     { title: "Lei do Exercício ", route: "", icon: "" },
//     { title: "PNAISP", route: "", icon: "" },
//     { title: "Resolução de Carga ", route: "", icon: "" },
//   ];

//   return (    
//     <View className="flex-1 flex-col h-screen items-center justify-center content-center m-4">
//       {buttons.map((button, index) => (
//         <TouchableOpacity
//           key={index}
//           className="bg-white rounded-lg shadow-lg items-center justify-center w-full p-3 m-3"
//           onPress={() => {navigation.navigate(button.route)}}
//         >
//           <Ionicons
//             name={button.icon}
//             size={40}
//             color="green"
//             className="mr-3"
//           />
//           <Text className="text-black text-lg font-semibold">
//             {button.title}
//           </Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// }


import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationProp } from '../../models/types';
import { useNavigation } from '@react-navigation/native';

interface Button {
  title: string;
  route: any;
  icon: any;
}

export default function LegislacaoScreen() {
  const navigation = useNavigation<NavigationProp>();
    const buttons: Button[] = [
      { title: "RENP", route: "RENP", icon: "home" },
      { title: "LEP", route: "LEP", icon: "book" },
      { title: "Lei do Exercício Profissional", route: "LeiExercicioProfissional", icon: "briefcase" },
      { title: "PNAISP", route: "PNAISP", icon: "heart" },
      { title: "Resolução de Carga Horária", route: "ResolucaoCargaHoraria", icon: "battery-charging" },
  ];
  
  return (
    
    <View className="flex-1 flex-col h-screen items-center justify-center content-center m-4">
      {buttons.map((button, index) => (
        <TouchableOpacity
          key={index}
          className="bg-white rounded-lg shadow-lg items-center justify-center w-full p-3 m-3"
          onPress={() => {navigation.navigate(button.route)
        }}
        >
          <Ionicons
            name={button.icon}
            size={40}
            color="green"
            className="mr-3"
          />
          <Text className="text-black text-lg font-semibold">
            {button.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
