import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Card, Text, Button } from "react-native-paper";

export default function NomeIdade() {
  const [nome, setNome] = useState("?????");

  function mostrarNome() {
    setNome("Ricardo");
    console.log(nome);
  }

  function alterarNome() {
    setNome("Pedro");
  }

  return (
    <View>
      <Card>
        <Card.Content>
          <Card.Title title="Componente Nome/Número" />
          <Text variant="displayMedium">Nome: {nome}</Text>
          {/* <Text variant='displayMedium'>Nome: {idade}</Text>             */}
        </Card.Content>
        <Card.Actions>
          <Button onPress={mostrarNome}>Mostrar Nome</Button>
          <Button onPress={alterarNome}>Alterar Nome</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}
