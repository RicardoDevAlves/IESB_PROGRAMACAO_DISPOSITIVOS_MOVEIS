import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Card, Text, Button} from 'react-native-paper'

export default function Controle() {
  return (
    <View>
      <Card>
        <Card.Content>
            <Card.Title title='Componente Controle'/>
            <Text variant='displayMedium'>Volume: ?????</Text>

        </Card.Content>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({})