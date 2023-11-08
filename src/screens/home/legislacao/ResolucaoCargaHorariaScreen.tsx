import React from 'react';
import { WebView } from 'react-native-webview';

export default function ResolucaoCargaHoraria() {
  return (
    <WebView
      source={{
        uri: 'https://drive.google.com/file/d/1AxRH6oHmNile7H_6ScE0c24nl7KiWb97/view?usp=sharing',
      }}
    />
  );
}
