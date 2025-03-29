import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PrimeiroComponente() {
  return (
    <View>
      <Text style={styles.container}>PrimeiroComponente</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "green"
    }
})