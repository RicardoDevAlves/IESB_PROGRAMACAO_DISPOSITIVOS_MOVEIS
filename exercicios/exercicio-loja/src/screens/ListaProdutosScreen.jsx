import axios from 'axios';
import React, {useEffect, useState} from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Avatar, Card, IconButton, Text } from "react-native-paper";

export default function ListaProdutosScreen() {
  const [categorias, setCategorias] = useState({})

  return (
    <View>

      <FlatList 
      data={categorias}
      renderItem={({ item }) => (
        <Card
          style={{ margin: 8 }}
          onPress={() => navigation.navigate("ProdutoScreen", item.id)} 
        >
          <Card.Title 
            title={products + " " + category}

          />
        </Card>
      )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
