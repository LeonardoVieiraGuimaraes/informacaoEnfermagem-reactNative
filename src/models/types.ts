// types.ts
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  HomeStack: undefined;
  Inicio: undefined;
  Legislacao: undefined;
  Lei: undefined;
  NormasRotinas: undefined;
  NivelAutonomiar: undefined;
  ProtocolosSaude: undefined;
  NivelAutonomia: undefined;
  FaleDSP: undefined;
  RENP: undefined;
  LEP: undefined;
  LeiExercicioProfissional: undefined;
  PNAISP: undefined;
  ResolucaoCargaHoraria: undefined;
  RegimentoEnfermagem: undefined;
  Tuberculose: undefined;
  ISTHIVAids: undefined;
  Escabiose: undefined;
  POPEnfermagem: undefined;
  ManualTransporte: undefined;
  GuiaAtencaoPrimaria: undefined;
  EscalaAtividaEnfermagemScreen: undefined;
  parabens: undefined;
  quaseLa: undefined;
  voceConsegue: undefined;
  Renp: undefined;
  PNAISPCartilha: undefined;
  EscalaEnfermagem: undefined;
  FichaFuncional: undefined;
  RegimentoEnfermagemDoc: undefined;
  Treinamento: undefined;
  // adicione outras rotas aqui
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
