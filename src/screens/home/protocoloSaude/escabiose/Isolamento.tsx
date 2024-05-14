import { Text, Image, View } from 'react-native';
import styles from '../../../../assets/styles/styles';

export default function buscaAtivaDiagnostico() {
  return (
    <View>
      <Text className={styles.text}>
        {
          'Deve ser realizado isolamento dos IPLs com diagnóstico de Escabiose, assim como dos contatos, ou seja, dos indivíduos que estão na mesma cela, com suspensão temporária de escolta externa, visitas/visitas íntimas, atendimento jurídico, mantendo atendimento de saúde.'
        }
      </Text>

      <Image
        source={require('../../../../assets/img/medidaIsolamentoEscabiose.png')}
        resizeMode="contain"
        style={{ width: '100%', height: undefined, aspectRatio: 3 }}
      />
    </View>
  );
}
