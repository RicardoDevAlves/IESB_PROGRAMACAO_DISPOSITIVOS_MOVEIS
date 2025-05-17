import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import MegaSenaScreen from './components/screens/MegaSenaScreen'
import JogoDoBichoScreen from './components/screens/JogoDoBichoScreen.jsx'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const icons = {
              MegaSena: 'numeric',
              JogoDoBicho: 'paw',
            }
            return (
              <MaterialCommunityIcons
                name={icons[route.name]}
                size={size}
                color={color}
              />
            )
          },
        })}
      >
        <Tab.Screen name="MegaSena" component={MegaSenaScreen} />
        <Tab.Screen name="JogoDoBicho" component={JogoDoBichoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}