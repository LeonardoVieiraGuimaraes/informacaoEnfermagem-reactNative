import { Text, Image, View } from 'react-native';
import styles from '../../../../assets/styles/styles';

export default function BuscaAtiva() {
  return (
    <View>
      <Text className={styles.text}>
        {
          'Ocorrerá quando for identificado caso de TB no momento da admissão do IPL na unidade prisional; quando for identificado caso confirmado ou suspeita de TB com resistência a medicamentos, e em casos de falência no tratamento da doença. '
        }
      </Text>

      <Image
        source={require('../../../../assets/img/medidaIsolamentoTuberculose.png')}
        resizeMode="contain"
        style={{ width: '100%', height: undefined, aspectRatio: 3 }}
      />
    </View>
  );
}
