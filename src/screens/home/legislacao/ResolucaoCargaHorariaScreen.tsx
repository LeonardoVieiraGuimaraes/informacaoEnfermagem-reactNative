import React from 'react';
import { WebView } from 'react-native-webview';

export default function ResolucaoCargaHoraria() {
  return (
    <WebView
      source={{
        uri: 'https://drive.google.com/file/d/1aOnULEdTS96M94tDMnpelfZCu-beM0w6/view?usp=sharing',
      }}
    />
  );
}
