import * as React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from "../models/types";

import HomeScreen from '../screens/HomeScreen';
import InicioScreen from "../screens/home/InicioScreen";
import LegislacaoScreen from '../screens/inicio/LegislacaoScreen';
import NormasRotinasScreen from "../screens/inicio/NormasRotinasScreen";
import ProtocolosSaudeScreen from "../screens/inicio/ProtocolosSaudeScreen";
import NivelAutonomiaScreen from "../screens/inicio/NivelAutonomiaScreen";
import FaleDSPScreen from "../screens/inicio/FaleDSPScreen";
import RENPScreen from "../screens/inicio/legislacao/RENPScreen";
import LEPScreen from "../screens/inicio/legislacao/LEPScreen";
import LeiExercicoProfissionalScreen from "../screens/inicio/legislacao/LeiExercicoProfissionalScreen";
import PNAISPScreen from "../screens/inicio/legislacao/PNAISPScreen";
import ResolucaoCargaHorariaScreen from "../screens/inicio/legislacao/ResolucaoCargaHorariaScreen";
import RegimentoEnfermagemSceen from "../screens/inicio/normasRotinas/RegimentoEnfermagemScreen";
import TuberculoseScreen from "../screens/inicio/protocoloSaude/TuberculoseScreen";


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      {/* Route para a tela home */}
      <Stack.Screen name="HomeStack" component={HomeScreen} /> 

      {/* Router tela home */}
      <Stack.Screen name="Inicio" component={InicioScreen} />

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