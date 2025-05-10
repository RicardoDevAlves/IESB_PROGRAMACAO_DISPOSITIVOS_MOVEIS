import React from "react";
import 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    
    <PaperProvider>
      <NavigationContainer>
        <DrowerRoutes/>
      </NavigationContainer>
    </PaperProvider>


  );
}
