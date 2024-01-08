import React from 'react';
import { WebView } from 'react-native-webview';

export default function TreinamentoScreen() {
  return (
    <WebView
      source={{
        uri: 'https://telelab.aids.gov.br/index.php/component/k2/item/769-testes-rapidos-acesso-rapido',
      }}
    />
  );
}
