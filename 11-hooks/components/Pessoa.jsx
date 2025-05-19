import { View } from "react-native";
import React, { useState } from "react";
import { Button, Card, Text } from "react-native-paper";

export default function Pessoa() {
  const [pessoa, setPessoa] = useState({});

  function revelar() {
    const novaPessoa = {
      nome: "Goku",
      idade: "1200",
      imagem: "https://i.pinimg.com/736x/c7/6d/b9/c76db90666c94f8eba942c61c11acf0f.jpg"
    };
    setPessoa(novaPessoa);
  }
  return (
    <View>
      <Card>
        <Card.Content>
          <Text variant="displaySmall">Componente Pessoa</Text>
          <Text variant="displaySmall">Nome: {pessoa.nome}</Text>
          <Text variant="displaySmall">Idade: {pessoa.idade}</Text>
          <Card.Cover source={{ uri: pessoa.imagem }} />
        </Card.Content>
        <Card.Actions>
          <Button onPress={revelar}>Revelar</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}
