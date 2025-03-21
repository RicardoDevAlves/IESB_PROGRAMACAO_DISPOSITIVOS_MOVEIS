import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function PrimeiroComponente() {

    return (
        <View>
            <Text>Primeiro Componente</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'yellow',
      alignItems: 'center',
      justifyContent: 'center',
    }
});
