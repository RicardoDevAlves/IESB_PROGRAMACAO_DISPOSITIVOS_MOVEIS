
import { PaperProvider } from "react-native-paper";
import { Ionicons } from '@expo/vector-icons'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from './screens/HomeScreen.jsx'
import ProfileScreen from './screens/ProfileScreen.jsx'
import SettinScreen from './screens/SettingsScreen.jsx'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          {/* HomeScreen */}
          <Tab.Screen 
          name='HomeScreen'
          component={HomeScreen}
          options={{ 
            title: 'Início',
            tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />
           }} 
          />
          {/* ProfileScreen */}
          <Tab.Screen 
          name='ProfileScreen' 
          component={ProfileScreen}
          options={{ 
            title: 'Perfil',
            tabBarIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size} />
           }}  />
          {/* SettingsScreen */}
          <Tab.Screen 
          name='SettingsScreen' 
          component={SettinScreen} 
          options={{ 
            title: 'Configurações',
            tabBarIcon: ({ color, size }) => <Ionicons name="cog" color={color} size={size} />
           }} />




        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}


