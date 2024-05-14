import React from 'react';
import { WebView } from 'react-native-webview';

export default function POPEnfermagemScreen() {
  return (
    <WebView
      source={{
        // uri: 'https://github.com/LeonardoVieiraGuimaraes/informacaoEnfermagem-reactNative/blob/fbba88f3bf1a96d1198aefb77a332504eb0343fa/src/assets/files/POP_2023_DIVULGADO_12_5_ASCOM_REVISADO.pdf',
        uri: 'https://drive.google.com/file/d/1YlpW3n8yQUo7cfZT0fcwUvSmruONasYR/view?usp=sharing',
      }}
    />
  );
}
