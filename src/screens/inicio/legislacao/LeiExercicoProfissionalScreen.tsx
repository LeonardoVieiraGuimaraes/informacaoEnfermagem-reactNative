import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Linking,
  TouchableHighlight,
} from "react-native";

function ScreenLeiExercicoProfissional() {
  const openLink = () => {
    const url =
      "http://www.cofen.gov.br/lei-n-749886-de-25-de-junho-de-1986 4161.html";
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Lei do Exercício Profissional</Text>
      <Text style={styles.text}>
        A Lei 7.498 de 25 de Junho de 1986 dispõe sobre a regulamentação do
        exercício da enfermagem, e dá outras providências e está disponível
        através do link:
      </Text>
      <TouchableHighlight onPress={openLink}>
        <Text style={[styles.text, styles.link]}>
          http://www.cofen.gov.br/lei-n-749886-de-25-de-junho-de-1986 4161.html
        </Text>
      </TouchableHighlight>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00BF63", // Cor de fundo verde para a área de enfermagem 1
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    color: "black",
    fontWeight: "bold",
    padding: 20,
    textAlign: "justify",
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
  // imagem: {
  //   width: 100, // Largura da imagem do botão
  //   height: 100, // Altura da imagem do botão
  // },
});

export default ScreenLeiExercicoProfissional;
