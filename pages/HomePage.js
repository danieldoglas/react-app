import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Link } from '@react-navigation/native';
import LeftHandMenu from '../components/LeftHandMenu';
import Chat from '../components/Chat';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const isSmallScreen = true;
const Stack = createNativeStackNavigator();

function HomePage() {
  return 
    {isSmallScreen ?
    (
        <Stack.Navigator>
            <Stack.Screen name='LHN' component={LeftHandMenu} />
            <Stack.Screen name='Chat' component={Chat}/>
        </Stack.Navigator>)
    : (
    <View>
        <LeftHandMenu />
        <Chat />
    </View>)
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default HomePage