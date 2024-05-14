import React from 'react';
import { WebView } from 'react-native-webview';

export default function GuiaAtencaoPrimariaScreen() {
  return (
    <WebView
      source={{
        uri: 'https://drive.google.com/file/d/1pVqAZ_C9VD2g6MhiVxPE3sKboK_baPFF/view?usp=sharing',
      }}
    />
  );
}
