import React from 'react';
import { WebView } from 'react-native-webview';

export default function RENPcreen() {
  return (
    <WebView
      source={{
        uri: 'https://www2.camara.leg.br/legin/fed/lei/1980-1987/lei-7498-25-junho-1986-368005-normaatualizada-pl.pdf',
      }}
    />
  );
}
