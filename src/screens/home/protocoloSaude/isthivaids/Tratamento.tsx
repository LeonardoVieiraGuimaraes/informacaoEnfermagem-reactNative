import { Text } from 'react-native';
import styles from '../../../../assets/styles/styles';

export default function Tratamento() {
  return (
    <>
      <Text className={styles.textTitle}> Sífilis </Text>
      <Text className={styles.text}>
        {
          'A benzilpenicilina benzatina dever ser administrada exclusivamente por via intramuscular (IM). A região ventro-glútea é a via preferencial.\nObservação: Destaca-se a Decisão nº 0094/2015, do Conselho Federal de Enfermagem – Cofen, que reforça a importância da administração da benzilpenicilina benzatina pelos profissionais de enfermagem na Atenção Básica (COFEN, 2015), além da Nota Técnica Cofen/CTLN nº 03/2017, que reafirma esse compromisso de cuidado à saúde (COFEN, 2017).\nOs testes não treponêmicos (ex.: VDRL/ RPR) devem ser realizados mensalmente nas gestantes e, no restante da população (incluindo PVHIV), a cada três meses até o 12º mês do acompanhamento do paciente (3, 6, 9 e 12 meses).'
        }
      </Text>
      <Text className={styles.textTitle}> HIV/Aids </Text>
      <Text className={styles.text}>
        {
          'O Estado de Minas Gerais distribui os antirretrovirais, mensalmente, para as Unidades Dispensadora de Medicamentos (UDMs) dos CTA/SAE, e esses devem ser entregues aos pacientes portadores de HIV e vivendo com HIV/Aids.'
        }
      </Text>
      <Text className={styles.textTitle}>Hepatite B e C</Text>
      <Text className={styles.text}>
        {
          'Os medicamentos disponíveis para controle da hepatite B são a alfapeginterferona, o tenofovir desoproxila (TDF), o entecavir e o tenofovir alafenamida (TAF). O tratamento da hepatite C é feito com os chamados antivirais de ação direta (DAA), que apresentam taxas de cura de mais 95% e são realizados, geralmente, por 8 ou 12 semanas.'
        }
      </Text>
    </>
  );
}
