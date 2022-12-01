import { NavigationContainer } from '@react-navigation/native'
import React, { useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SignedInNav from './navigation/SignedInNav';
import SignedOffNav from './navigation/SignedOffNav';




export default function Expensify() {
    const [isLoggedIn, setLoggedIn ] = useState(false);
    const setData = value => {
        setLoggedIn(value);
    }
    return (
    <SafeAreaProvider>
        <NavigationContainer>
            { isLoggedIn ? (<SignedInNav/>) : (<SignedOffNav callbackFunction={setData} />) }
        </NavigationContainer>
    </SafeAreaProvider>
  )
}