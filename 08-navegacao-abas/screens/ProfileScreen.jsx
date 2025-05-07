import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>Tela de PERFIL DE USUÁRIO</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink'
  }
})