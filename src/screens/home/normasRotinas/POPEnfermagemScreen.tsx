import { SafeAreaView, useWindowDimensions } from 'react-native';
import Pdf from 'react-native-pdf';

const source = {
  uri: 'file://src/assets/files/POP_2023_DIVULGADO_12_5_ASCOM_REVISADO.pdf',
  cache: true,
};

export default function App() {
  const { width, height } = useWindowDimensions();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Pdf
        source={source}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={(error) => {
          console.log(error);
        }}
        onPressLink={(uri) => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={{ flex: 1, width, height }}
      />
    </SafeAreaView>
  );
}

// import React from 'react';
// import { WebView } from 'react-native-webview';

// export default function POPEnfermagemScreen() {
//   return (
//     <WebView
//       source={{
//         uri: 'https://drive.google.com/file/d/1D-hvHKd-4MmXBmJ9v2jNn3s5MMz8a3TG/view?usp=drive_link',
//       }}
//     />
//   );
// }
