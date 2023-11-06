import React from 'react';
import { WebView } from 'react-native-webview';

export default function PNAISP() {
  return (
    <WebView
      source={{
        uri: 'https://drive.google.com/file/d/1VTRHwLGa-ejFh80eORLIL43LReurlmzh/view?usp=sharing',
      }}
    />
  );
}
