import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import LoginPage from '../pages/LoginPage';
import AboutPage from '../pages/AboutPage';

const Stack = createNativeStackNavigator();

export default function SignedOffNav({callbackFunction}) {
  return (
    
    <Stack.Navigator screenOptions={({ route, navigation })=> ({headerShown: false})}>
      <Stack.Screen name="Login" component={LoginPage} initialParams={{callbackFunction}} />
      <Stack.Screen name="About" component={AboutPage} />
    </Stack.Navigator>
  )
}