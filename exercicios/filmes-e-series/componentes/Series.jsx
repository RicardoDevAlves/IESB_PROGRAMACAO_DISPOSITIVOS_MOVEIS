import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";

export default function Series(props) {
  const { nome, ano, diretor, temporadas, capa } = props;
  console.log(props);

  return (
    <View style={styles.container}>
      <View style={styles.capaContainer}>
        <Image
          source={{ uri: capa }}
          style={{
            height: capaHeight,
            width: capaWidth,
            resizeMode: "cover",
          }}
        />
      </View>
      <Text style={styles.nome}>Nome: {props.nome}</Text>
      <Text style={styles.ano}>Ano: {props.ano}</Text>
      <Text style={styles.diretor}>Diretor: {props.diretor}</Text>
      <Text style={styles.temporadas}>Temporadas: {props.temporadas}</Text>
    </View>
  );
}
const windowWidth = Dimensions.get("window").width;
const capaWidth = windowWidth * 0.6;
const capaHeight = capaWidth * 1.5;

const styles = StyleSheet.create({
  container: {
    width: capaWidth,
    marginRight: 20,
    marginBottom: 25,
  },
  capaContainer: {
    borderRadius: 8,
    overflow: "hidden",
    shadowColor: "red",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 8,
  },
  capa: {
    width: capaWidth,
    height: capaHeight,
    resizeMode: "cover",
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "40%",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  infoContainer: {
    marginTop: 10,
    paddingHorizontal: 5,
  },
  nome: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  metaInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  ano: {
    color: "#aaa",
    fontSize: 14,
  },
  temporadas: {
    color: "#aaa",
    fontSize: 14,
  },
  diretor: {
    color: "#777",
    fontSize: 14,
  },
  separator: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#aaa",
    marginHorizontal: 6,
  },
});