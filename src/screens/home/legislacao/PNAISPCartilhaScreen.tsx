import React from 'react';
import { WebView } from 'react-native-webview';

export default function PNAISPCartilhaScreen() {
  return (
    <WebView
      source={{
        uri: 'https://drive.google.com/file/d/1GPrQADJDHjk4u0Lm-vU_HRok_1xX3zAt/view?usp=sharing',
      }}
    />
  );
}
