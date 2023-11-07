import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../models/types';

import HomeScreen from '../screens/HomeScreen';
// import InicioScreen from "../screens/home/InicioScreen";
import LegislacaoScreen from '../screens/home/LegislacaoScreen';
import NormasRotinasScreen from '../screens/home/NormasRotinasScreen';
import ProtocolosSaudeScreen from '../screens/home/ProtocolosSaudeScreen';
import NivelAutonomiaScreen from '../screens/home/NivelAutonomiaScreen';
import FaleDSPScreen from '../screens/home/FaleDSPScreen';
import RENPScreen from '../screens/home/legislacao/RENPScreen';
import LEPScreen from '../screens/home/legislacao/LEPScreen';
import LeiExercicoProfissionalScreen from '../screens/home/legislacao/LeiExercicoProfissionalScreen';
import PNAISPScreen from '../screens/home/legislacao/PNAISPScreen';
import ResolucaoCargaHorariaScreen from '../screens/home/legislacao/ResolucaoCargaHorariaScreen';
import RegimentoEnfermagemSceen from '../screens/home/normasRotinas/RegimentoEnfermagemScreen';
import TuberculoseScreen from '../screens/home/protocoloSaude/TuberculoseScreen';
import ISTHIVAidsScreen from '../screens/home/protocoloSaude/ISTHIVAidsScreen';
import EscabioseScreen from '../screens/home/protocoloSaude/EscabioseScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeStack"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name="Legislacao"
        component={LegislacaoScreen}
        options={{ title: 'Legislação' }}
      />
      <Stack.Screen
        name="NormasRotinas"
        component={NormasRotinasScreen}
        options={{ title: 'Normas e Rotinas' }}
      />
      <Stack.Screen
        name="ProtocolosSaude"
        component={ProtocolosSaudeScreen}
        options={{ title: 'Protocolos de Saúde' }}
      />
      <Stack.Screen
        name="NivelAutonomia"
        component={NivelAutonomiaScreen}
        options={{ title: 'Nível de Autonomia' }}
      />
      <Stack.Screen
        name="FaleDSP"
        component={FaleDSPScreen}
        options={{ title: 'Fale com o DSP' }}
      />
      <Stack.Screen
        name="RENP"
        component={RENPScreen}
        options={{ title: 'RENP' }}
      />
      <Stack.Screen
        name="LEP"
        component={LEPScreen}
        options={{ title: 'LEP' }}
      />
      <Stack.Screen
        name="LeiExercicioProfissional"
        component={LeiExercicoProfissionalScreen}
        options={{ title: 'Lei do Exercício Profissional' }}
      />
      <Stack.Screen
        name="PNAISP"
        component={PNAISPScreen}
        options={{ title: 'PNAISP' }}
      />
      <Stack.Screen
        name="ResolucaoCargaHoraria"
        component={ResolucaoCargaHorariaScreen}
        options={{ title: 'Resolução de Carga Horária' }}
      />
      <Stack.Screen
        name="RegimentoEnfermagem"
        component={RegimentoEnfermagemSceen}
        options={{ title: 'Regimento de Enfermagem' }}
      />
      <Stack.Screen
        name="Tuberculose"
        component={TuberculoseScreen}
        options={{ title: 'Tuberculose' }}
      />
      <Stack.Screen
        name="ISTHIVAids"
        component={ISTHIVAidsScreen}
        options={{ title: 'ISTHIVAids' }}
      />
      <Stack.Screen
        name="Escabiose"
        component={EscabioseScreen}
        options={{ title: 'Escabiose' }}
      />
    </Stack.Navigator>
  );
}
