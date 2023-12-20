import React from 'react';
import { WebView } from 'react-native-webview';

export default function EscalaEnfermagemScreen() {
  return (
    <WebView
      source={{
        uri: 'https://docs.google.com/document/d/1f-FM5LXD05iCX1EwTvq4NH3xkg7ZGWSV/edit?usp=drive_link&ouid=116778489310709069261&rtpof=true&sd=true',
      }}
    />
  );
}
