import React from 'react';
import { WebView } from 'react-native-webview';

export default function ManualTransporteScreen() {
  return (
    <WebView
      source={{
        uri: 'https://drive.google.com/file/d/1s1hTTkhhr_CMR3zQapOeapJEqEFU_W7I/view?usp=sharing',
      }}
    />
  );
}
