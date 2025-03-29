import { Button, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function JavascriptComponente() {

    const nome = "Ricardo"
    const idade = 35

    function checarMaiorIdade() {
        if(idade >= 18) {
            return "Maior idade!"
        } else {
            return "Menor idade!"
        }
    }

    function alerta() {
        
        alert("Clicou no botão!")
    }





  return (
    <ScrollView>

    <View style={styles.container}>
      <Text>JavascriptComponente</Text>
      <Text>Nome: {nome}</Text>
      <Text>Idade: {idade}</Text>
      <Text>Idade + 40 {idade + 40}</Text>
      <Text>18+ {checarMaiorIdade()}</Text>
      <Button title='Clicar' onPress={alerta}/>



    </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "yellow"
    },
})