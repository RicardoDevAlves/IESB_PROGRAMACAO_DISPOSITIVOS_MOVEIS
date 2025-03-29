import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Filme(props) {
  const {dados} = props;
    console.log(props);

  return (
    <View>
      <Text>Nome: {props.nome}</Text>
      <Text>Ano: {props.ano}</Text>
      <Text>Diretor: {props.diretor}</Text>
      <Text>Tipo: {props.tipo}</Text>
      <Image 
        source={{ uri: props.capa }}
        style={{
          height: 200,
          width: 200,
        }}
      
      />
    </View>
  )
}

const styles = StyleSheet.create({})