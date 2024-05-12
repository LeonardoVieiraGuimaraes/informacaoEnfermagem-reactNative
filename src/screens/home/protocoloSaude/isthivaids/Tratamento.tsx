import { Text } from 'react-native';
import styles from '../../../../Styles/Styles';

export default function Tratamento() {
  return (
    <Text className={styles.text}>
      {
        'Sífilis \n\nA benzilpenicilina benzatina dever ser administrada exclusivamente por via intramuscular (IM). A região ventro-glútea é a via preferencial.\nObservação: Destaca-se a Decisão nº 0094/2015, do Conselho Federal de Enfermagem – Cofen, que reforça a importância da administração da benzilpenicilina benzatina pelos profissionais de enfermagem na Atenção Básica (COFEN, 2015), além da Nota Técnica Cofen/CTLN nº 03/2017, que reafirma esse compromisso de cuidado à saúde (COFEN, 2017).\nOs testes não treponêmicos (ex.: VDRL/ RPR) devem ser realizados mensalmente nas gestantes e, no restante da população (incluindo PVHIV), a cada três meses até o 12º mês do acompanhamento do paciente (3, 6, 9 e 12 meses).\n\nHIV/Aids\n\nO Estado de Minas Gerais distribui os antirretrovirais, mensalmente, para as Unidades Dispensadora de Medicamentos (UDMs) dos CTA/SAE, e esses devem ser entregues aos pacientes vivendo com Aids.\n\nHepatite B e C\n\nOs medicamentos disponíveis para controle da hepatite B são a alfapeginterferona, o tenofovir desoproxila (TDF), o entecavir e o tenofovir alafenamida (TAF). O tratamento da hepatite C é feito com os chamados antivirais de ação direta (DAA), que apresentam taxas de cura de mais 95% e são realizados, geralmente, por 8 ou 12 semanas.'
      }
    </Text>
  );
}
