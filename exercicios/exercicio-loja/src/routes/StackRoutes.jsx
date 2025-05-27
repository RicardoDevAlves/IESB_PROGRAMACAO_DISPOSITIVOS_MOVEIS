import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import ProdutoScreen from "../screens/ProdutoScreen";
import ListaProdutosScreen from "../screens/ListaProdutosScreen";

const Stack = createStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Página Inicial",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="ProdutoScreen"
        component={ProdutoScreen}
        options={{
          title: "Produtos",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="ListaProdutosScreen"
        component={ListaProdutosScreen}
        options={{
          title: "Lista de Produtos",
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
}
