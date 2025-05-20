import { FlatList, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Card, Text, Button } from "react-native-paper";

export default function MegaSenaScreen() {
  const [jogoGerado, setJogoGerado] = useState([]);
  const [listaJogos, setListaJogos] = useState([]);

  function gerarJogo() {
    const dezenas = [];
    while (dezenas.length < 6) {
      const numero = Math.floor(Math.random() * 60) + 1;
      if (!dezenas.includes(numero)) dezenas.push(numero);
    }
    dezenas.sort((a, b) => a - b); // Adicionando ordenação dos números
    setJogoGerado(dezenas);
    setListaJogos([...listaJogos, dezenas]);
  }

  return (
    <View style={styles.container}>
      
      <Card style={styles.card}>
        <Card.Content>
          <Card.Title title="Gerador Mega Sena" />
          <Text style={styles.jogoAtual}>
            {jogoGerado.length > 0 ? jogoGerado.join(" - ") : "Nenhum jogo gerado"}
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={gerarJogo}>
            Gerar Jogo
          </Button>
        </Card.Actions>
      </Card>

      <FlatList
        data={listaJogos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.cardJogo}>
            <Text style={styles.jogo}>{item.join(" - ")}</Text>
          </View>
        )}
        contentContainerStyle={styles.listaContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  jogoAtual: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0066b3',
    marginVertical: 8,
  },
  listaContainer: {
    paddingBottom: 16,
  },
  cardJogo: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  jogo: {
    color: '#0066b3',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 1,
  },
});