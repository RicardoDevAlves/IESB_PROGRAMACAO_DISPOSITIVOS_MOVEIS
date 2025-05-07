// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ReceitaScreen from './src/screens/ReceitaScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Receitas' }} />
        <Stack.Screen name="Receita" component={ReceitaScreen} options={{ title: 'Detalhes da Receita' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
