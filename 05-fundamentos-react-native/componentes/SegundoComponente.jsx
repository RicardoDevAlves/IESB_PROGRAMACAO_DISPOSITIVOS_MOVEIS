import React from "react";
import { Text, StyleSheet } from 'react-native';

export default function () {

    return <Text style={style.textoPequeno}>Segundo Componente</Text>
}

const style = StyleSheet.create({
    textoPequeno: {
        fontSize: 35,
        fontWeight: 600
    }
});