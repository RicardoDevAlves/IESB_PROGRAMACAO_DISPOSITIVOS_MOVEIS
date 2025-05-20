import { StyleSheet, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Card, Text, Button } from 'react-native-paper'

export default function MegaSenaScreen() {
  const [jogoGerado, setJogoGerado] = useState([])
  const [jogosMegaSena, setJogosMegaSena] = useState([])

  function gerarJogo() {
    const dezenas = []
    while (dezenas.length < 6) {
      const numero = Math.floor(Math.random() * 60) + 1
      if (!dezenas.includes(numero)) dezenas.push(numero)
    }
    dezenas.sort((a, b) => a - b)
    setJogoGerado(dezenas)
    setJogosMegaSena([...jogosMegaSena, dezenas])
  }

  return (
    <View style={styles.container}>
      <Card>
        <Card.Content>
          <Card.Title title="Gerador Mega-Sena" />
          <Text variant="titleLarge">
            Jogo: {jogoGerado.join(' - ')}
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button onPress={gerarJogo}>Gerar Jogo</Button>
        </Card.Actions>
      </Card>

      <FlatList
        data={jogosMegaSena}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.jogo}>{item.join(' - ')}</Text>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { padding: 8 },
  jogo: { fontSize: 30, marginVertical: 2 },
})