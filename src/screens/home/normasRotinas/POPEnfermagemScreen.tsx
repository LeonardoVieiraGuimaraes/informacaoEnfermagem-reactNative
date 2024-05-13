import React from 'react';
import { StyleSheet, View } from 'react-native';
import PDFView from 'react-native-pdf';

export default function POPEnfermagemScreen() {
  const source = {
    uri: 'file://src/assets/files/POP_2023_DIVULGADO_12_5_ASCOM_REVISADO.pdf',
  };

  return (
    <View style={styles.container}>
      <PDFView
        source={source}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`current page: ${page}`);
        }}
        onError={(error) => {
          console.log(error);
        }}
        style={styles.pdf}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: '100%',
  },
});

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
