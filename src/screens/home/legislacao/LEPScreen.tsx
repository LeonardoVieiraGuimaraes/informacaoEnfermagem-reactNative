import React from 'react';
import { WebView } from 'react-native-webview';

export default function LEPScreen() {
  return (
    <WebView
      source={{
        uri: 'https://drive.google.com/file/d/1zjav8GCnQchro0bJUsN3tn4zU0YwOLel/view?usp=sharing',
      }}
    />
  );
}
