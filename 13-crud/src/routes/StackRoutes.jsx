import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import AlunoLista from "../screens/AlunoLista";
import AlunoForm from "../screens/AlunoForm";

const Stack = createStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen />
      <Stack.Screen />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
