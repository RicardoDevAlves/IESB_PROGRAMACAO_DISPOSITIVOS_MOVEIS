import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Card, Text, Button } from "react-native-paper";

export default function NomeIdade() {
  const [nome, setNome] = useState("************");
  const [idade, setIdade] = useState(" **");

  function mostrarNome() {
    setNome("Ricardo");
    console.log(nome);
  }

  function alterarNome() {
    setNome("Alves");
  }

  function mostrarIdade() {
    setIdade("35");
  }

  return (
    <View>
      <Card>
        <Card.Content>
          <Card.Title title="Componente Nome/Número" />
          <Text variant="displayMedium">Nome: {nome}</Text>
          <Text variant="displayMedium">Idade: {idade}</Text>
        </Card.Content>
        <Card.Actions>
          <Button onPress={mostrarNome}>Mostrar Nome</Button>
          <Button onPress={alterarNome}>Alterar Nome</Button>
          <Button onPress={mostrarIdade}>Mostrar Idade</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}
