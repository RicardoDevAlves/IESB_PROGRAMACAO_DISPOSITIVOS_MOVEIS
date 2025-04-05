import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import Jogador from './Jogador'

const Time = ({ time }) => {
  return (
    <View style={styles.timeContainer}>
      <View style={styles.timeHeader}>
        <Image source={{ uri: time.imagem }} style={styles.timeLogo} />
        <View style={styles.timeInfo}>
          <Text style={styles.timeNome}>{time.nome}</Text>
          <Text style={styles.timeDetails}>Fundado em: {time.anoFundacao}</Text>
          <Text style={styles.timeDetails}>Mascote: {time.mascote}</Text>
        </View>
      </View>
      
      <Text style={styles.jogadoresTitulo}>Jogadores:</Text>
      <FlatList
        horizontal
        data={time.jogadores}
        keyExtractor={(jogador) => `${time.nome}-${jogador.nome}`}
        renderItem={({ item }) => (
          <Jogador
            nome={item.nome}
            numero={item.numero}
            imagem={item.imagem}
          />
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listaJogadores}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  timeContainer: {
    marginBottom: 30,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  timeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  timeLogo: {
    width: 70,
    height: 70,
    marginRight: 15,
    borderRadius: 35,
  },
  timeInfo: {
    flex: 1,
  },
  timeNome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  timeDetails: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  jogadoresTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  listaJogadores: {
    paddingHorizontal: 5,
  },
})

export default Time