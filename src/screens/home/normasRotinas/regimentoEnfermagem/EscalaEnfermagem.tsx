import { Text, TouchableOpacity, Linking, View } from 'react-native';

export default function EscalaEnfermagem() {
  const handlePress = () => {
    Linking.openURL(
      'https://docs.google.com/document/d/1WqbP0jh_TbjhgX5HwZuoLUEaTc4rXoy-/edit?usp=sharing&ouid=116778489310709069261&rtpof=true&sd=true',
    );
  };

  return (
    <View className="flex-1  flex-row">
      <TouchableOpacity
        onPress={handlePress}
        className="bg-blue-100 p-3 rounded-lg"
      >
        <Text className="text-black font-semibold ">Escala Enfermagem</Text>
      </TouchableOpacity>
    </View>
  );
}
