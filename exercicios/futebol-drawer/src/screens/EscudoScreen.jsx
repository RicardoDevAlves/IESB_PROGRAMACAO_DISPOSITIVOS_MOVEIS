import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const time = {
  nome: "Flamengo",
  escudo: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
  fundacao: "15 de novembro de 1895",
  estadio: "Maracanã",
  mascote: "Urubu",
  cores: ["Vermelho", "Preto"]
};

export default function EscudoScreen() {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>{time.nome}</Title>
          <Image source={{ uri: time.escudo }} style={styles.escudo} />
          <Paragraph style={styles.text}>Fundação: {time.fundacao}</Paragraph>
          <Paragraph style={styles.text}>Estádio: {time.estadio}</Paragraph>
          <Paragraph style={styles.text}>Mascote: {time.mascote}</Paragraph>
          <Paragraph style={styles.text}>Cores: {time.cores.join(', ')}</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  card: {
    borderRadius: 8,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#C52626',
    textAlign: 'center',
    marginBottom: 16,
  },
  escudo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
});