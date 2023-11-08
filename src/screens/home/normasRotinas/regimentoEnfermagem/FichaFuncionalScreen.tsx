import React from 'react';
import { WebView } from 'react-native-webview';

export default function FichaFuncionalScreen() {
  return (
    <WebView
      source={{
        uri: 'https://drive.google.com/file/d/1OsCUcW6wYuUPAkDcuf6Teo9_xcmvv4zj/view?usp=drive_link',
      }}
    />
  );
}
