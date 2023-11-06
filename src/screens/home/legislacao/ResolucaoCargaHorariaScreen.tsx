import React from 'react';
import { WebView } from 'react-native-webview';

export default function ResolucaoCargaHoraria() {
  return (
    <WebView
      source={{
        uri: 'https://drive.google.com/file/d/1oRB9MayqD_P1ea07dkERhI5VR_5nwLET/view?usp=sharing',
      }}
    />
  );
}
