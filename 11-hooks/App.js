import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NomeIdade from './components/NomeIdade';
import Controle from './components/Controle';
import NumeroAleatorio from './components/NumeroAleatorio';
import Pessoa from './components/Pessoa';
import GeradorNumeroAleatorio from './components/GeradorNumeroAleatorio';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <NomeIdade></NomeIdade>
      <Controle></Controle>
      <NumeroAleatorio></NumeroAleatorio> */}

      {/* <Pessoa></Pessoa> */}
      <GeradorNumeroAleatorio></GeradorNumeroAleatorio>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
