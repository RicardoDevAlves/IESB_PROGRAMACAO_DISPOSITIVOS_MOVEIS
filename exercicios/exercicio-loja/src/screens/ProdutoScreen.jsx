// src/screens/ProdutoScreen.jsx
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';

export default function ProdutoScreen({ route, navigation }) {
  console.log("Params recebidos:", route.params);
  const { productId } = route.params;
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${productId}`)
      .then(res => setProduto(res.data))
      .catch(err => console.log(err));
  }, [productId]);

  if (!produto) {
    return <Text style={{ margin: 10 }}>Carregando...</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <Card>
        <Card.Cover source={{ uri: produto.thumbnail }} />
        <Card.Content>
          <Text variant="titleLarge">{produto.title}</Text>
          <Text>{produto.description}</Text>
          <Text style={styles.label}>💲 Preço: ${produto.price}</Text>
          <Text style={styles.label}>⭐ Avaliação: {produto.rating}</Text>
          <Text style={styles.label}>📦 Estoque: {produto.stock}</Text>
          <Text style={styles.label}>🏷 Marca: {produto.brand}</Text>
          <Text style={styles.label}>📁 Categoria: {produto.category}</Text>
        </Card.Content>
        <Card.Actions>
          <Button mode="outlined" onPress={() => navigation.goBack()}>
            Voltar
          </Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  label: {
    marginTop: 5,
  },
});
