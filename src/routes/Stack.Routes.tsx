import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../models/types';

import HomeScreen from '../screens/HomeScreen';
import LegislacaoScreen from '../screens/home/LegislacaoScreen';
import NormasRotinasScreen from '../screens/home/NormasRotinasScreen';
import ProtocolosSaudeScreen from '../screens/home/ProtocolosSaudeScreen';
import NivelAutonomiaScreen from '../screens/home/NivelAutonomiaScreen';
import FaleDSPScreen from '../screens/home/FaleDSPScreen';

import RegimentoEnfermagemSceen from '../screens/home/normasRotinas/RegimentoEnfermagemScreen';
import TuberculoseScreen from '../screens/home/protocoloSaude/TuberculoseScreen';
import ISTHIVAidsScreen from '../screens/home/protocoloSaude/ISTHIVAidsScreen';
import EscabioseScreen from '../screens/home/protocoloSaude/EscabioseScreen';
import POPEnfermagemScreen from '../screens/home/normasRotinas/POPEnfermagemScreen';
import ManualTransporteScreen from '../screens/home/normasRotinas/ManualTransporteScreen';
import GuiaAtencaoPrimariaScreen from '../screens/home/normasRotinas/GuiaAtencaoPrimariaScreen';
import EscalaAtividaEnfermagemScreen from '../screens/home/nivelAutonomia/EscalaAtividaEnfermagemScreen';

import LeiExercicioProfissionalScreen from '../screens/home/legislacao/LeiExercicioProfissionalScreen';
import LEPScreen from '../screens/home/legislacao/LEPScreen';
import RENPScreen from '../screens/home/legislacao/RENPScreen';

import VoceConsegueScreen from '../screens/home/nivelAutonomia/VoceConsegueScreen';
import ParabensScreen from '../screens/home/nivelAutonomia/ParabensScreen';
import QuaseLaScreen from '../screens/home/nivelAutonomia/QuaseLaScreen';
import ResolucaoCargaHorariaScreen from '../screens/home/legislacao/ResolucaoCargaHorariaScreen';
import PNAISPScreen from '../screens/home/legislacao/PNAISPScreen';
import PNAISPCartilhaScreen from '../screens/home/legislacao/PNAISPCartilhaScreen';
import EscalaEnfermagemScreen from '../screens/home/normasRotinas/regimentoEnfermagem/EscalaEnfermagemScreen';
import FichaFuncionalScreen from '../screens/home/normasRotinas/regimentoEnfermagem/FichaFuncionalScreen';
import RegimentoEnfermagemScreen from '../screens/home/normasRotinas/regimentoEnfermagem/RegimentoEnfermagemScreen';
import TreinamentoScreen from '../screens/home/protocoloSaude/isthivaids/TreinamentoScreen';

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
        name="NormasRotinas"
        component={NormasRotinasScreen}
        options={{ title: 'Normas e Rotinas' }}
      />
      <Stack.Screen
        name="EscalaEnfermagem"
        component={EscalaEnfermagemScreen}
        options={{ title: 'Escala de Enfermagem' }}
      />

      <Stack.Screen
        name="FichaFuncional"
        component={FichaFuncionalScreen}
        options={{ title: 'Ficha Funcional' }}
      />
      <Stack.Screen
        name="RegimentoEnfermagemDoc"
        component={RegimentoEnfermagemScreen}
        options={{ title: 'Regimento Enfermagem' }}
      />
      <Stack.Screen
        name="Legislacao"
        component={LegislacaoScreen}
        options={{ title: 'Legislação' }}
      />

      <Stack.Screen
        name="ProtocolosSaude"
        component={ProtocolosSaudeScreen}
        options={{ title: 'Protocolos de Saúde' }}
      />
      <Stack.Screen
        name="Treinamento"
        component={TreinamentoScreen}
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
        options={{ title: 'RENP Lei' }}
      />

      <Stack.Screen
        name="LEP"
        component={LEPScreen}
        options={{ title: 'LEP' }}
      />
      <Stack.Screen
        name="LeiExercicioProfissional"
        component={LeiExercicioProfissionalScreen}
        options={{ title: 'Lei do Exercício Profissional' }}
      />
      <Stack.Screen
        name="PNAISP"
        component={PNAISPScreen}
        options={{ title: 'PNAISP' }}
      />
      <Stack.Screen
        name="PNAISPCartilha"
        component={PNAISPCartilhaScreen}
        options={{ title: 'Cartilha PNAISP' }}
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
        name="POPEnfermagem"
        component={POPEnfermagemScreen}
        options={{ title: 'POP Enfermagem' }}
      />
      <Stack.Screen
        name="ManualTransporte"
        component={ManualTransporteScreen}
        options={{ title: 'Manual de Transporte' }}
      />
      <Stack.Screen
        name="GuiaAtencaoPrimaria"
        component={GuiaAtencaoPrimariaScreen}
        options={{ title: 'Guia Atenção Primária' }}
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
      <Stack.Screen
        name="EscalaAtividaEnfermagemScreen"
        component={EscalaAtividaEnfermagemScreen}
        options={{ title: 'Escala de Ativdade de Enfermagem' }}
      />
      <Stack.Screen
        name="parabens"
        component={ParabensScreen}
        options={{ title: 'Parabéns!' }}
      />
      <Stack.Screen
        name="quaseLa"
        component={QuaseLaScreen}
        options={{ title: 'Quase lá!' }}
      />
      <Stack.Screen
        name="voceConsegue"
        component={VoceConsegueScreen}
        options={{ title: 'Você Consegue!' }}
      />
    </Stack.Navigator>
  );
}
