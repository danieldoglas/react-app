import React from 'react'
import HomePage from '../pages/HomePage';
import SearchPage from '../pages/SearchPage';
import SettingsPage from '../pages/SettingsPage';
import AboutPage from '../pages/AboutPage';
import ProfilePage from '../pages/ProfilePage';
import WalletPage from '../pages/WalletPage';

import {createNativeStackNavigator} from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator();


export default function SignedInNav() {
  return (
    <Stack.Navigator screenOptions={({ route, navigation })=> ({headerShown: false})}>
        <Stack.Group>
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="Search" component={SearchPage} />
        </Stack.Group>
        <Stack.Group>
            <Stack.Screen name="Settings" component={SettingsPage} />
            <Stack.Screen name="Profile" component={ProfilePage} />
            <Stack.Screen name="Wallet" component={WalletPage} />
            <Stack.Screen name="About" component={AboutPage} />
        </Stack.Group>
    </Stack.Navigator>
  )
}