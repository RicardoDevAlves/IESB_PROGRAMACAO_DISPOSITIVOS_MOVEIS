import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'

export default function Pessoa() {

    const [pessoa, setPessoa] = useState({})
  return (
    <View>
      <Card>
        <Card.Content>
            <Text variant='displaySmall'>Componente Pessoa</Text>
            <Text>Nome: </Text>
            <Text>Idade: </Text>
        </Card.Content>
        <Card.Actions>
            <Button>Revelar</Button>
        </Card.Actions>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({})