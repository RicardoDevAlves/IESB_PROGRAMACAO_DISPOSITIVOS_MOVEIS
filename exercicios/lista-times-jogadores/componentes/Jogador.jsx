import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Title, Text, useTheme } from 'react-native-paper';

const Jogador = ({ jogador }) => {
  const theme = useTheme();
  
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.touchable}
    >
      <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
        <Card.Cover 
          source={{ uri: jogador.imagem }} 
          style={styles.playerImage} 
        />
        <Card.Content style={styles.playerInfo}>
          <Title style={[styles.playerName, { color: theme.colors.text }]}>
            {jogador.nome}
          </Title>
          <Text style={[styles.playerNumber, { color: theme.colors.secondaryText }]}>
            #{jogador.numero}
          </Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    marginRight: 12,
    borderRadius: 8,
  },
  card: {
    width: 140,
    borderRadius: 8,
    elevation: 3,
  },
  playerImage: {
    height: 160,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  playerInfo: {
    padding: 8,
  },
  playerName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  playerNumber: {
    fontSize: 12,
  },
});

export default Jogador;