import { FlatList, StyleSheet, View, Image } from "react-native";
import React, { useState } from "react";
import { Card, Text, Button } from "react-native-paper";

// Lista de animais do jogo do bicho
const animais = [
  {
    numero: 1,
    nome: 'Avestruz',
    imagem: 'https://i.pinimg.com/736x/ef/3a/bb/ef3abbbc39b3cacee1ba922f95f1b0cd.jpg',
  },
  {
    numero: 2,
    nome: 'Águia',
    imagem: 'https://i.pinimg.com/736x/88/04/3b/88043b814c6d4fef1f4aee14356c00b1.jpg',
  },
  {
    numero: 3,
    nome: 'Burro',
    imagem: 'https://i.pinimg.com/736x/bc/f3/ee/bcf3eee6436f220cb4d10962e394c741.jpg',
  },
  {
    numero: 4,
    nome: 'Borboleta',
    imagem: 'https://i.pinimg.com/736x/dc/91/91/dc91911cb150d57f2f43da7466d1ab4f.jpg',
  },
  {
    numero: 5,
    nome: 'Cachorro',
    imagem: 'https://i.pinimg.com/736x/82/fb/de/82fbde9c403d43ebc83d79414b9239c3.jpg',
  },
  {
    numero: 6,
    nome: 'Cabra',
    imagem: 'https://i.pinimg.com/736x/10/20/bb/1020bbf758fa245fff4c4b1276e83b8a.jpg',
  },
  {
    numero: 7,
    nome: 'Carneiro',
    imagem: 'https://i.pinimg.com/736x/ce/c4/e6/cec4e6c3f16a63f9a713267ffcf9e114.jpg',
  },
  {
    numero: 8,
    nome: 'Camelo',
    imagem: 'https://i.pinimg.com/736x/85/0b/11/850b11e4c316abfe126ff1866c2aaeb0.jpg',
  },
  {
    numero: 9,
    nome: 'Cobra',
    imagem: 'https://i.pinimg.com/736x/3d/d8/a5/3dd8a5e99264f67efae4074431262878.jpg',
  },
  {
    numero: 10,
    nome: 'Coelho',
    imagem: 'https://i.pinimg.com/736x/eb/17/8b/eb178b465704a327d3e954eef4c7e338.jpg',
  },
];

export default function JogoDoBichoScreen() {
  const [animalSorteado, setAnimalSorteado] = useState(null);
  const [listaAnimais, setListaAnimais] = useState([]);

  function sortearAnimal() {
    const indiceAleatorio = Math.floor(Math.random() * animais.length);
    const animal = animais[indiceAleatorio];
    setAnimalSorteado(animal);
    setListaAnimais([...listaAnimais, animal]);
  }

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Card.Title title="Gerador Jogo do Bicho" />
          {animalSorteado ? (
            <View style={styles.animalContainer}>
              <Image 
                source={{ uri: animalSorteado.imagem }} 
                style={styles.imagemAnimal}
              />
              <Text style={styles.animalInfo}>
                {animalSorteado.numero} - {animalSorteado.nome}
              </Text>
            </View>
          ) : (
            <Text style={styles.textoVazio}>Nenhum animal sorteado</Text>
          )}
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={sortearAnimal}>
            Sortear Animal
          </Button>
        </Card.Actions>
      </Card>

      <FlatList
        data={listaAnimais}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.cardAnimal}>
            <Image 
              source={{ uri: item.imagem }} 
              style={styles.imagemLista}
            />
            <Text style={styles.textoAnimal}>
              {item.numero} - {item.nome}
            </Text>
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
  animalContainer: {
    alignItems: 'center',
    marginVertical: 8,
  },
  imagemAnimal: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 8,
  },
  animalInfo: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#228B22',
  },
  textoVazio: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginVertical: 8,
  },
  listaContainer: {
    paddingBottom: 16,
  },
  cardAnimal: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    elevation: 2,
  },
  imagemLista: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  textoAnimal: {
    fontSize: 16,
    color: '#333',
  },
});