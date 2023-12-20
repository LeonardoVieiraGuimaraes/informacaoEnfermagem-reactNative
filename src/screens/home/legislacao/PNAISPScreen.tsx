import React from 'react';
import { WebView } from 'react-native-webview';

export default function PNAISPScreen() {
  return (
    <WebView
      source={{
        uri: 'https://drive.google.com/file/d/1gw1rXuJk0B1zTb6LC3SDI5tFGKppPChY/view?usp=sharing',
      }}
    />
  );
}
