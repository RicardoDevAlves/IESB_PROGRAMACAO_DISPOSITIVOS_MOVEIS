// screens/ListaDeProdutos.jsx
import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Card, Text, Avatar, IconButton } from 'react-native-paper';
import axios from 'axios';

export default function ListaDeProdutos({ route, navigation }) {
  const { categoria } = route.params;
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    console.log("Categoria recebida:", categoria);
    axios.get(`https://dummyjson.com/products/category/${categoria}`)
      .then(res => setProdutos(res.data.products))
      .catch(err => console.log(err));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card style={styles.card} onPress={() => navigation.navigate('ProdutoScreen', { idProduto: item.id })}>
            <Card.Title
              title={item.title}
              subtitle={`Preço: $${item.price}`}
              left={(props) => <Avatar.Image {...props} source={{ uri: item.thumbnail }} />}
              right={(props) => <IconButton {...props} icon="arrow-right" />}
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
    padding: 10,
    backgroundColor: '#fff'
  },
  card: {
    marginBottom: 10
  }
});
