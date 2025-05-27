import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Avatar, Card, Text, IconButton } from "react-native-paper";

export default function HomeScreen({ navigation, route }) {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/category-list")
      .then((resposta) => {
        console.log(resposta.data);
        setCategorias(resposta.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={categorias}
        renderItem={({ item }) => (
          <Card
            style={{ margin: 6 }}
            onPress={() => navigation.navigate("ListaProdutosScreen", item)}
          >
            <Card.Title
              title={item}
              subtitle={item}
              left={(props) => (
                <Avatar.Image {...props} source={{ uri: item.image }} />
              )}
              right={() => <IconButton icon={"play"} />}
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
