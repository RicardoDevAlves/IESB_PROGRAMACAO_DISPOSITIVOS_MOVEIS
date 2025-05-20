import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MegaSenaScreen from './components/screens/MegaSenaScreen';
import JogoDoBichoScreen from './components/screens/JogoDoBichoScreen';
import { Ionicons } from '@expo/vector-icons'; // Você pode usar outros ícones se preferir

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'MegaSena') {
              iconName = focused ? 'ios-trophy' : 'ios-trophy-outline';
            } else if (route.name === 'JogoDoBicho') {
              iconName = focused ? 'ios-paw' : 'ios-paw-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#0066b3',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen 
          name="MegaSena" 
          component={MegaSenaScreen} 
          options={{ title: 'Mega-Sena' }}
        />
        <Tab.Screen 
          name="JogoDoBicho" 
          component={JogoDoBichoScreen} 
          options={{ title: 'Jogo do Bicho' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});