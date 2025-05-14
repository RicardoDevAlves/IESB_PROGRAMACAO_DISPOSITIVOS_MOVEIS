import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Card, Text, Button} from 'react-native-paper'

export default function NumeroAleatorio() {
  return (
    <View>
      <Card>
        <Card.Content>
            <Card.Title />
            <Text variant='displayMedium'>Número Aleatório: ????</Text>
        </Card.Content>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({})