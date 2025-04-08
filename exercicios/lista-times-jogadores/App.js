import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Provider as PaperProvider, Text, useTheme } from 'react-native-paper';
import Time from './componentes/Time';

const times = [
  {
    nome: "Flamengo",
    anoFundacao: 1895,
    mascote: "Urubu",
    imagem: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
    jogadores: [
      { nome: "Gabriel Barbosa", numero: 9, imagem: "https://i.pinimg.com/474x/1d/9f/5d/1d9f5de58831c9913f925a7155bdc7da.jpg" },
      // ... outros jogadores
    ],
  },
  // ... outros times
];

const StreamTheme = {
  dark: true,
  colors: {
    primary: '#E50914',
    background: '#121212',
    surface: '#1E1E1E',
    accent: '#FF5722',
    text: '#FFFFFF',
    secondaryText: '#B3B3B3',
    error: '#FF5252',
  },
  roundness: 8,
};

export default function App() {
  return (
    <PaperProvider theme={StreamTheme}>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Clube de Futebol</Text>
        
        <FlatList
          data={times}
          keyExtractor={(item) => item.nome}
          renderItem={({ item }) => <Time time={item} />}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StreamTheme.colors.background,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: StreamTheme.colors.primary,
    padding: 16,
    marginTop: 8,
  },
  listContainer: {
    paddingBottom: 40,
  },
});