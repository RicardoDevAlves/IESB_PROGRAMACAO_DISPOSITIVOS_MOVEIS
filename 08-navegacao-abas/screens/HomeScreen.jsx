import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import React from 'react'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text variant='headlineLarge' style={{ textAlign: 'center' }}>Bem-vindo à aplicação.</Text>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
  }
})