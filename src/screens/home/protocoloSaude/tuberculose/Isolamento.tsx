import { Text } from 'react-native';
import styles from '../../../../../assets/Styles/Styles';

export default function BuscaAtiva() {
  return (
    <Text className={styles.text}>
      {
        'Casos identificados no momento do ingresso na unidade prisional pelo período de 15 dias; Casos confirmados ou suspeitosde tuberculose com resistência aos medicamentos.\n\nFalência de tratamento'
      }
    </Text>
  );
}
