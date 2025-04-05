// componentes/Jogador.jsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Jogador = ({ nome, numero, imagem }) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: imagem }} style={styles.imagem} />
            <View style={styles.info}>
                <Text style={styles.nome}>{nome}</Text>
                <Text style={styles.numero}>Número: {numero}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 10,
        margin: 10,
        width: 180,
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    imagem: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 10,
    },
    info: {
        alignItems: 'center',
    },
    nome: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    numero: {
        fontSize: 14,
        color: '#666',
    },
});

export default Jogador;