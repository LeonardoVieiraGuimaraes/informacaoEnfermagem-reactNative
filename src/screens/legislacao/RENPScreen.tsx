import React from 'react';
import { WebView } from 'react-native-webview';

export default function RENPcreen() {
  return (
    <WebView
      source={{ uri: 'https://drive.google.com/file/d/1MRk8AIyCjzO484Ei2A4gPSwwxYagEgj4/view?usp=sharing' }}
    />
  );
}