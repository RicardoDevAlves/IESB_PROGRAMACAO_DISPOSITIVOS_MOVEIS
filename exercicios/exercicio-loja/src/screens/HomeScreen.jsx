import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Avatar, Card, Text, IconButton } from "react-native-paper";

export default function HomeScreen({ navigation, route }) {
  const [categoria, setCategoria] = useState([]);
  console.log("Imprimindo no Home Screen...", {categoria})

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/category-list")
      .then((resposta) => {
        setCategoria(resposta.data);
        console.log(resposta.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={categoria}
        renderItem={({ item }) => (
          <Card
            style={{ margin: 6 }}
            onPress={() => navigation.navigate("ListaProdutosScreen", { categoria: item })}

          >
            <Card.Title
              title={item}
              subtitle={categoria.category}
              left={(props) => (<Avatar.Image {...props} source={{ uri: item.image }} />
              )}
              right={() => <IconButton icon={"arrow-right"} />}
            />
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
