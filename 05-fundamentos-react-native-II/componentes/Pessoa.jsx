import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Pessoa(props) {
  const { dados } = props;
  console.log(props);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Jogador</Text>
      <Text>Nome: {dados.nome}</Text>
      <Text>Idade: {dados.idade}</Text>
      <Text>Jogou muito mau ontem!</Text>
      <Text>Perdeu de 4 x 1 pra Argentina!</Text>

      <Image
        source={{ uri: dados.imagem }}
        style={{
          height: 200,
          width: 200,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    borderWidth: 10,
    padding: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    fontSize: 30,
    fontWeight: 600,
  },
});
