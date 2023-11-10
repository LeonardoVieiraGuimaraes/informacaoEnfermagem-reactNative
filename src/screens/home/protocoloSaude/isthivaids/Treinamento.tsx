import { Text, TouchableOpacity, Linking } from 'react-native';

export default function Treinamento() {
  const openURL = () => {
    Linking.openURL('https://www.example.com');
  };

  return (
    <>
      <Text className="text-black text-lg font-semibold text-left">
        Participar do treinamento via TELEI-AB sobre testagem rápida Link:
      </Text>
      <TouchableOpacity onPress={openURL}>
        <Text style={{ color: 'blue' }}>
          https://telelahaids.gov.br/index.php/component/k2/item/769-testesrapidos-acesso-rapido
        </Text>
      </TouchableOpacity>
    </>
  );
}
