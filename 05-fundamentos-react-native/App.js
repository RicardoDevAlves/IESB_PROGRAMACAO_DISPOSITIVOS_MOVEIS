import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import  PrimeiroComponente  from './componentes/PrimeiroComponente'
import SegundoComponente from './componentes/SegundoComponente';
import TerceiroComponente from './componentes/TerceiroComponente';
import JavascriptComponente from './componentes/JavascriptComponente';
import PerfilAluno from './PerfilAluno';

export default function App() {
// Array de objetos com os dados dos perfis
  const perfis = [
  {
    nome: "Ricardo",
    idade: 35,
    email: "ricardo@gmail.com"
  },
  {
    nome: "André",
    idade: 22,
    email: "andre@gmail.com"
  },
  {
    nome: "Zeca",
    idade: 37,
    email: "zeca@gmail.com"
  },
  {
    nome: "João",
    idade: 19,
    email: "joao@gmail.com"
  },
]

  return (
    <ScrollView>
    <View style={styles.container}>

      <StatusBar style="auto" />
      <PrimeiroComponente />
      <SegundoComponente />
      <TerceiroComponente />
      <JavascriptComponente />

      {/* Usando o 'map' para mapear um ARRAY e exibir cada um dos elementos separadamente... */}
      {perfis.map((perfil, index) => (
      <PerfilAluno 
        key={index} // adicionando uma chave única através da iteração do map
        nome={perfil.nome}
        idade={perfil.idade}
        email={perfil.email}
      />
      
      ))}
      

    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9ff3ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
