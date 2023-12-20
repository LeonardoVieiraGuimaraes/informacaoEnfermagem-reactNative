import React from 'react';
import { WebView } from 'react-native-webview';

export default function FichaFuncionalScreen() {
  return (
    <WebView
      source={{
        uri: 'https://docs.google.com/document/d/1KcxhG8Vq40P2BIZs_cXKt3VCSMMaBngD/edit?usp=sharing&ouid=116778489310709069261&rtpof=true&sd=true',
      }}
    />
  );
}
