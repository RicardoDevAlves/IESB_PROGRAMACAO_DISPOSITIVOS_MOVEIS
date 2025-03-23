import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function TerceiroComponente() {
  return (
    <View>
      <Text style={styles.textoNegrito}>Terceiro Componente</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    textoNegrito: {
        fontSize: 25,
        fontWeight: 400
    }
})