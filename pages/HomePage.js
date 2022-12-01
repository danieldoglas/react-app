import React from 'react'
import { StyleSheet, Dimensions, View,} from 'react-native';
import LeftHandMenu from '../components/LeftHandMenu';
import Chat from '../components/Chat';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const initialDimensions = Dimensions.get('window');
const isSmallScreenWidth = initialDimensions.width <= 800;
        
const Stack = createNativeStackNavigator();

// Home page is responsible for both / and /r/:id 
export default function HomePage({route}) {

  return isSmallScreenWidth ? 
    (<Stack.Navigator screenOptions={({ route, navigation })=> ({headerShown: false})}> 
        <Stack.Screen name='LeftHandMenu' component={LeftHandMenu} initialParams={{isSmallScreenWidth}}/>
        <Stack.Screen name='Chat' component={Chat} initialParams={{isSmallScreenWidth}}/>

    </Stack.Navigator>) : (<View style={{
            display: 'flex',
            flexWrap: 'nowrap',
            height: '100%',
            flexDirection: "row"}}>
                <LeftHandMenu isSmallScreenWidth={isSmallScreenWidth}/>
                <Chat isSmallScreenWidth={isSmallScreenWidth}/>
            </View>);
}
