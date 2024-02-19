import React from 'react';
import { WebView } from 'react-native-webview';

export default function GuiaAtencaoPrimariaScreen() {
  return (
    <WebView
      source={{
        uri: 'https://www.corenmg.gov.br/wp-content/uploads/2019/12/Guia-de-Orientacoes-para-a-Atuacao-da-Equipe-de-Enfermagem-na-Atencao-Primaria-a-Saude.pdf',
      }}
    />
  );
}
