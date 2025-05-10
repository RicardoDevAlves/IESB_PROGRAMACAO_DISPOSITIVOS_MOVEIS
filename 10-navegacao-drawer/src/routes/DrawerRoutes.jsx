import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'

import {} from '../screens/HomeScreen'
import {} from '../screens/ProfileScreen'
import {} from '../screens/ConfigScreen'

const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>

        <Drawer.Screen name='HomeScreen' component={HomeScreen} />

        <Drawer.Screen name='ProfileScreen' component={ProfileScreen} />

        <Drawer.Screen name='ConfigScreen' component={ConfigScreen} />

    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({})