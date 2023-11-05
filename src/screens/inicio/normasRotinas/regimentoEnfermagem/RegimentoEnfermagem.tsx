import { Text, TouchableOpacity, Linking, View } from 'react-native';

export default function FichaFuncionalScreen() {
  const handlePress = () => {
    Linking.openURL('https://drive.google.com/file/d/11WFZaMxa1Jhpfz3NIbbv6K5FsJaW90Cs/view?usp=sharing');
  };

  return (
    <View className='flex-1  flex-row'>
    <TouchableOpacity onPress={handlePress} className="bg-blue-100 p-3 rounded-lg">
      <Text className="text-black font-semibold ">Regimento Enfermagem</Text>
    </TouchableOpacity>
    </View>
  );
}