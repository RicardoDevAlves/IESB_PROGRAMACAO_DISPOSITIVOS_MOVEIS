import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Card, Title, Text, useTheme } from 'react-native-paper';
import Jogador from './Jogador';

const Time = ({ time }) => {
  const theme = useTheme();
  
  return (
    <View style={[styles.section, { backgroundColor: theme.colors.background }]}>
      <View style={styles.sectionHeader}>
        <Card.Cover 
          source={{ uri: time.imagem }} 
          style={styles.teamLogo} 
        />
        <View>
          <Title style={{ color: theme.colors.text }}>{time.nome}</Title>
          <Text style={{ color: theme.colors.secondaryText }}>
            {time.anoFundacao} • {time.mascote}
          </Text>
        </View>
      </View>

      <Text style={[styles.subtitle, { color: theme.colors.text }]}>Elenco Principal</Text>
      
      <FlatList
        horizontal
        data={time.jogadores}
        keyExtractor={(item) => `${time.nome}-${item.nome}`}
        renderItem={({ item }) => <Jogador jogador={item} />}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.playersList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginVertical: 16,
    paddingVertical: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  teamLogo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
    resizeMode: 'contain',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  playersList: {
    paddingLeft: 16,
  },
});

export default Time;