import React from 'react';
import { WebView } from 'react-native-webview';

export default function RENPcreen() {
  return (
    <WebView
      source={{
        uri: 'https://drive.google.com/file/d/1D-hvHKd-4MmXBmJ9v2jNn3s5MMz8a3TG/view?usp=sharing',
      }}
    />
  );
}
