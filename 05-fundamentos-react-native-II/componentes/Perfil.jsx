import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Perfil() {
  return (
    <View styles={styles.container}>
      <Text styles={styles.texto}>Perfil</Text>
      <Text styles={styles.texto}>Nome:</Text>
      <Text styles={styles.texto}>Idade:</Text>
      <Text styles={styles.texto}>E-mail:</Text>
      <Text styles={styles.texto}>Telefone:</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        borderWidth: 40
    }
})