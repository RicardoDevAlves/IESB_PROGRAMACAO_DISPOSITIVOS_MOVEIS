import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import PrimeiroComponente from "./componentes/PrimeiroComponente";
import JavascriptComponente from "./componentes/JavascriptComponente";
import Perfil from "./componentes/Perfil";
import ListaComponente from "./componentes/ListaComponente";
import Pessoa from "./componentes/Pessoa";

export default function App() {
  return (
    <View style={styles.container}>
    <StatusBar style="auto" />

      <Text style={styles.container}>PERFIL DO JOGADOR</Text>

      <Pessoa 

      dados={{
        nome: "Neymar",
        idade: 33,
        imagem: 'https://i.pinimg.com/474x/29/43/8e/29438e473733eb99eb62c2310072e39e.jpg'

      }}
      
      />
      


    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#41EAD4",
   }
});
