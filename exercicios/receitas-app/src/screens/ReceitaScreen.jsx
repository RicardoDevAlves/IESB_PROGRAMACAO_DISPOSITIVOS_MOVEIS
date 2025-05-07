import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Card, Title, Paragraph, Button } from 'react-native-paper';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function ReceitaScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { receita } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Card>
        <Card.Cover source={{ uri: receita.imagem }} />
        <Card.Content>
          <Title>{receita.nome}</Title>
          <Paragraph>Tempo de preparo: {receita.tempoPreparo}</Paragraph>
          <Paragraph>Porções: {receita.porcoes}</Paragraph>

          <Text style={styles.subtitulo}>Ingredientes:</Text>
          {receita.ingredientes.map((item, index) => (
            <Text key={index}>• {item}</Text>
          ))}

          <Text style={styles.subtitulo}>Modo de Preparo:</Text>
          {receita.modoPreparo.map((passo, index) => (
            <Text key={index}>{passo}</Text>
          ))}

          <Button
            mode="outlined"
            onPress={() => navigation.goBack()}
            style={styles.botaoVoltar}
          >
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
  botaoVoltar: {
    marginTop: 20
  }
});
