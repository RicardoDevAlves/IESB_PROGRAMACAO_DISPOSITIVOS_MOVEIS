import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ListaComponente() {

    const lista = ["Uva", "Maçã", "Banana", "Laranja"]


  return (
    <View style={styles.container}>
      {lista.map((fruta) => <Text>{fruta}</Text>)}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    }
})