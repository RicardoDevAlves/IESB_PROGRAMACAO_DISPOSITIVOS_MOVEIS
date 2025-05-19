import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Button, Card, Text } from "react-native-paper";

export default function GeradorNumeroAleatorio() {
  const [numeroAleatorio, setNumeroAleatorio] = useState(0);
  const [listaNumeros, setListaNumeros] = useState([]);

  function gerar() {
    const numero = Math.floor(Math.random() * 101);
    setNumeroAleatorio(numero);
    setListaNumeros([...listaNumeros, numero])
  }

  function resetar() {
    setListaNumeros([]);
  }

  return (
    <View>
      <Card>
        <Card.Content>
          <Card.Title title='Componente Gerador de Número Aleatório' />
          <Text variant="displaySmall">Gerador de Números:</Text>
          <Text>{numeroAleatorio}</Text>
        </Card.Content>
        <Card.Actions>
          <Button mode='contained-tonal' onPress={gerar}>Gerar Número</Button>
          <Button onPress={resetar}>Resetar</Button>
        </Card.Actions>
      </Card>
      <Card>
        <Card.Content>
          <Text variant="displaySmall">Lista de Números Gerados:</Text>
          <Text>{listaNumeros.join("-")}</Text>
          {/* O recurso .map abaixo também exibe números sorteados um em baixo do outro... */}
          {/* {listaNumeros.map(numero => <Text>{numero}</Text>)}  */} 
          <Button onPress={resetar}>Resetar</Button>
        </Card.Content>
      </Card>
    </View>
  );
}

