import React from 'react';
import { WebView } from 'react-native-webview';

export default function LEPScreen() {
  return (
    <WebView
      source={{
        uri: 'https://www.planalto.gov.br/ccivil_03/leis/l7210.htm',
      }}
    />
  );
}
