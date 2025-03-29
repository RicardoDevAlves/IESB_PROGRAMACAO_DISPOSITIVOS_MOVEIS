import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Series(props) {
    const { dados } = props;
    console.log(props);

  return (
    <View>

      <Text>Nome: {props.nome}</Text>
      <Text>Ano: {props.ano}</Text>
      <Text>Diretor: {props.diretor}</Text>
      <Text>Temporadas: {props.temporadas}</Text>
      <Image source={{ uri: props.capa }}
      style={{
        height:400,
        width: 200,
        resizeMode: 'contain'
      }}
      />

    </View>
  )
}

const styles = StyleSheet.create({

})