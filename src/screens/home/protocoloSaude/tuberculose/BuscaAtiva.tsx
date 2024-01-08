import { Text } from 'react-native';
import styles from '../../../Styles/Styles';

export default function BuscaAtiva() {
  return (
    <Text className={styles.text}>
      Busca ativa de casos suspeitos (sintomático respiratório) pessoa que
      apresenta tosse, com qualquer tempo de duração, podendo estar associada ou
      não a outros sintomas.
    </Text>
  );
}
