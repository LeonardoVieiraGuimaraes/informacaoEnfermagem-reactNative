import * as React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from "../models/types";

import HomeScreen from '../screens/HomeScreen';
// import InicioScreen from "../screens/home/InicioScreen";
import LegislacaoScreen from '../screens/home/LegislacaoScreen';
import NormasRotinasScreen from "../screens/home/NormasRotinasScreen";
import ProtocolosSaudeScreen from "../screens/home/ProtocolosSaudeScreen";
import NivelAutonomiaScreen from "../screens/home/NivelAutonomiaScreen";
import FaleDSPScreen from "../screens/home/FaleDSPScreen";
import RENPScreen from "../screens/home/legislacao/RENPScreen";
import LEPScreen from "../screens/home/legislacao/LEPScreen";
import LeiExercicoProfissionalScreen from "../screens/home/legislacao/LeiExercicoProfissionalScreen";
import PNAISPScreen from "../screens/home/legislacao/PNAISPScreen";
import ResolucaoCargaHorariaScreen from "../screens/home/legislacao/ResolucaoCargaHorariaScreen";
import RegimentoEnfermagemSceen from "../screens/home/normasRotinas/RegimentoEnfermagemScreen";
import TuberculoseScreen from "../screens/home/protocoloSaude/TuberculoseScreen";


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      {/* Route para a tela home */}
      <Stack.Screen name="HomeStack" component={HomeScreen} /> 

      {/* Router tela home */}
      {/* <Stack.Screen name="Inicio" component={InicioScreen} /> */}

      {/* Router tela Inicio */}
      <Stack.Screen name="Legislacao" component={LegislacaoScreen} />
      <Stack.Screen name="NormasRotinas" component={NormasRotinasScreen} />
      <Stack.Screen name="ProtocolosSaude" component={ProtocolosSaudeScreen} />
      <Stack.Screen name="NivelAutonomia" component={NivelAutonomiaScreen} />
      <Stack.Screen name="FaleDSP" component={FaleDSPScreen} />
      
      {/* Router tela Legislação */}
      <Stack.Screen name="RENP" component={RENPScreen} />
      <Stack.Screen name="LEP" component={LEPScreen} />
      <Stack.Screen name="LeiExercicioProfissional" component={LeiExercicoProfissionalScreen} />
      <Stack.Screen name="PNAISP" component={PNAISPScreen} />
      <Stack.Screen name="ResolucaoCargaHoraria" component={ResolucaoCargaHorariaScreen} />

      {/* Normas e Rotinas */}
      <Stack.Screen name="RegimentoEnfermagem" component={RegimentoEnfermagemSceen} />
      

      {/* Protocolos de Saúde */}
      <Stack.Screen name="Tuberculose" component={TuberculoseScreen} />
      {/* Nível de Autonomia */}

      {/* Fale com o DSP */}
      
    </Stack.Navigator>
  );
}