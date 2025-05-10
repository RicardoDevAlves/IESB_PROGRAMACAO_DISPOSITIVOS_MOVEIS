import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { List, Text } from 'react-native-paper';

const titulos = [
  { nome: "Campeonato Brasileiro", anos: [1980, 1982, 1983, 1992, 2009, 2019, 2020] },
  { nome: "Copa Libertadores da América", anos: [1981, 2019, 2022] },
  { nome: "Copa do Brasil", anos: [1990, 2006, 2013, 2022, 2024] },
  { nome: "Supercopa do Brasil", anos: [2020, 2021, 2025] }
];

const TitulosScreen = () => {
  return (
    <FlatList
      data={titulos}
      keyExtractor={(item) => item.nome}
      renderItem={({ item }) => (
        <List.Section>
          <List.Subheader>{item.nome}</List.Subheader>
          {item.anos.map((ano, idx) => (
            <List.Item key={idx} title={`Ano: ${ano}`} left={props => <List.Icon {...props} icon="trophy" />} />
          ))}
        </List.Section>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 }
});

export default TitulosScreen;
