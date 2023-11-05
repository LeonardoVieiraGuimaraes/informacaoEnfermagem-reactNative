// types.ts
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  HomeStack: undefined;
  Inicio: undefined;
  Legislacao: undefined;
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
  // adicione outras rotas aqui
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;