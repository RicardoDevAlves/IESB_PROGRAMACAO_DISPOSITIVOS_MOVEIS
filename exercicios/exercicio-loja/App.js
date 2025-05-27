import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen.jsx';
import ListaProdutosScreen from './src/screens/ListaProdutosScreen.jsx';
import ProdutoScreen from './src/screens/ProdutoScreen.jsx';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{
            headerStyle: { backgroundColor: '#6200ee' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        >
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Categorias' }} />
          <Stack.Screen name="ListaProdutosScreen" component={ListaProdutosScreen} options={{ title: 'Produtos' }} />
          <Stack.Screen name="ProdutoScreen" component={ProdutoScreen} options={{ title: 'Detalhes do Produto' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
