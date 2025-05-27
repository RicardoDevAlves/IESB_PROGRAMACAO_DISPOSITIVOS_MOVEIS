import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Image } from 'react-native';
import { Card, Text, Title, Paragraph, Button } from 'react-native-paper';
import axios from 'axios';

export default function ProdutoScreen({ route, navigation }) {
  const { idProduto } = route.params;
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${idProduto}`)
      .then(res => setProduto(res.data))
      .catch(err => console.log(err));
  }, []);

  if (!produto) return <Text>Carregando produto...</Text>;

  return (
    <ScrollView style={styles.container}>
      <Card>
        <Card.Cover source={{ uri: produto.thumbnail }} />
        <Card.Content>
          <Title>{produto.title}</Title>
          <Paragraph>{produto.description}</Paragraph>
          <Text>💲Preço: ${produto.price}</Text>
          <Text>🏷 Marca: {produto.brand}</Text>
          <Text>📦 Estoque: {produto.stock}</Text>
          <Text>📊 Avaliação: {produto.rating} ⭐</Text>
          <Text>🔖 Categoria: {produto.category}</Text>
          <Text style={styles.subtitulo}>📦 Dimensões:</Text>
          <Text>Largura: {produto.dimensions?.width} cm</Text>
          <Text>Altura: {produto.dimensions?.height} cm</Text>
          <Text>Profundidade: {produto.dimensions?.depth} cm</Text>

          <Text style={styles.subtitulo}>📢 Avaliações:</Text>
          {produto.reviews?.map((review, index) => (
            <Card key={index} style={styles.reviewCard}>
              <Card.Content>
                <Text>👤 {review.reviewerName}</Text>
                <Text>⭐ {review.rating} — "{review.comment}"</Text>
              </Card.Content>
            </Card>
          ))}

          <Button mode="contained" onPress={() => navigation.goBack()} style={styles.button}>
            Voltar
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  subtitulo: {
    marginTop: 10,
    fontWeight: 'bold'
  },
  reviewCard: {
    marginTop: -10
  },
  button: {
    marginTop: 15
  }
});
