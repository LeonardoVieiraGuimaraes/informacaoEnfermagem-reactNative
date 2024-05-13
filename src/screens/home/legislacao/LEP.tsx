// import React from 'react';
// import { Text, View } from 'react-native';
// import ButtonArrowforward from '../../../components/ButtonArrowforward';
// import styles from '../../Styles/Styles';

// interface Button {
//   title: string;
//   route: String;
// }

// export default function PNAISP() {
//   const buttons: Button[] = [
//     {
//       title: 'LEP',
//       route: 'LEP',
//     },
//   ];
//   return (
//     <View className={styles.screen}>
//       <Text>
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore odio,
//         reiciendis, accusantium inventore impedit aperiam non sint ratione cum
//         dicta quo! Alias, delectus inventore voluptatum unde nulla maiores esse
//         pariatur.
//       </Text>
//       {ButtonArrowforward(buttons)}
//     </View>
//   );
// }

import React from 'react';
import { Text, View } from 'react-native';
import ButtonArrowforward from '../../../components/ButtonArrowForward';
import styles from '../../../Styles/Styles';

interface Button {
  title: string;
  route: String;
}

export default function GuiaAtencaoPrimaria() {
  const buttons: Button[] = [
    {
      title: 'LEP',
      route: 'LEP',
    },
  ];
  return (
    <View>
      <Text className={styles.text}>
        {'Lei de Execução Penal\nClique no botão abaixo para acessar:'}
      </Text>
      {ButtonArrowforward(buttons)}
    </View>
  );
}
