import { NavigationContainer } from '@react-navigation/native'
import React, { useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SignedInNav from './navigation/SignedInNav';
import SignedOffNav from './navigation/SignedOffNav';
import Linking from './navigation/Routes';
  

export default function Expensify() {
    const [isLoggedIn, setLoggedIn ] = useState(false);
    const setData = value => {
        setLoggedIn(value);
    }
    return (
    <SafeAreaProvider>
        <NavigationContainer linking={Linking}>
            { isLoggedIn ? (<SignedInNav/>) : (<SignedOffNav callbackFunction={setData} />) }
        </NavigationContainer>
    </SafeAreaProvider>
  )
}