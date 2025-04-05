import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import Jogador from './componentes/Jogador';

const times = [/* sua lista de times aqui */];

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Times de Futebol</Text>
            
            <FlatList
                data={times}
                keyExtractor={(item) => item.nome}
                renderItem={({ item: time }) => (
                    <View style={styles.timeContainer}>
                        <View style={styles.timeHeader}>
                            <Image source={{ uri: time.imagem }} style={styles.timeLogo} />
                            <View style={styles.timeInfo}>
                                <Text style={styles.timeNome}>{time.nome}</Text>
                                <Text>Fundado em: {time.anoFundacao}</Text>
                                <Text>Mascote: {time.mascote}</Text>
                            </View>
                        </View>
                        
                        <Text style={styles.jogadoresTitulo}>Jogadores:</Text>
                        <FlatList
                            horizontal
                            data={time.jogadores}
                            keyExtractor={(jogador) => `${time.nome}-${jogador.nome}`}
                            renderItem={({ item: jogador }) => (
                                <Jogador
                                    nome={jogador.nome}
                                    numero={jogador.numero}
                                    imagem={jogador.imagem}
                                />
                            )}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.listaJogadores}
                        />
                    </View>
                )}
                contentContainerStyle={styles.listaTimes}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    listaTimes: {
        paddingBottom: 20,
    },
    timeContainer: {
        marginBottom: 30,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    timeHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    timeLogo: {
        width: 70,
        height: 70,
        marginRight: 15,
    },
    timeInfo: {
        flex: 1,
    },
    timeNome: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    jogadoresTitulo: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    listaJogadores: {
        paddingHorizontal: 5,
    },
});