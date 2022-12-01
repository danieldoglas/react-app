import { NavigationContainer } from '@react-navigation/native'
import React, { useState } from 'react'
import SignedInNav from './navigation/SignedInNav';
import SignedOffNav from './navigation/SignedOffNav';




export default function Expensify() {
    const [isLoggedIn, setLoggedIn ] = useState(false);
    const setData = value => {
        console.log("iihu");
        setLoggedIn(value);
    }
    return (
    <NavigationContainer>
        { isLoggedIn ? (<SignedInNav/>) : (<SignedOffNav callbackFunction={setData} />) }
    </NavigationContainer>
  )
}