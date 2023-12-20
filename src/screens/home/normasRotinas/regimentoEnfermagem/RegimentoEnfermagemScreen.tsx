import React from 'react';
import { WebView } from 'react-native-webview';

export default function RegimentoEnfermagemScreen() {
  return (
    <WebView
      source={{
        uri: 'https://drive.google.com/file/d/1WwS2D4nY8Hm8DedHVkiuGsqC3um6lctv/view?usp=sharing',
      }}
    />
  );
}
