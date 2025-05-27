import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import ListaProdutosScreen from './src/screens/ListaProdutosScreen';
import ProdutoScreen from './src/screens/ProdutoScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Categorias' }} />
        <Stack.Screen name="ListaProdutosScreen" component={ListaProdutosScreen} options={{ title: 'Produtos da Categoria' }} />
        <Stack.Screen name="ProdutoScreen" component={ProdutoScreen} options={{ title: 'Detalhes do Produto' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
