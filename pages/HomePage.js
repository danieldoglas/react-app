import React from 'react'
import { StyleSheet, Dimensions, View,} from 'react-native';
import LeftHandMenu from '../components/LeftHandMenu';
import Chat from '../components/Chat';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const initialDimensions = Dimensions.get('window');
const isSmallScreenWidth = initialDimensions.width <= 800;
        
const Stack = createNativeStackNavigator();

export default function HomePage() {
  return isSmallScreenWidth ? 
    (<Stack.Navigator> 
        <Stack.Screen name='LeftHandMenu' component={LeftHandMenu}/>
        <Stack.Screen name='Chat' component={Chat}/>
        <Stack.Screen />
    </Stack.Navigator>) : (<View style={{
            display: 'flex',
            flexWrap: 'nowrap',
            height: '100%',
            flexDirection: "row"}}>
                <LeftHandMenu />
                <Chat />
            </View>);
}
