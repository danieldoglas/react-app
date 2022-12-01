import React from 'react'
import { StyleSheet, Dimensions, View,} from 'react-native';
import LeftHandMenu from '../components/LeftHandMenu';
import Chat from '../components/Chat';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const initialDimensions = Dimensions.get('window');
const isSmallScreenWidth = initialDimensions.width <= 800;
        
const Stack = createNativeStackNavigator();

export default function HomePage() {
  return (
  <View style={{
    display: 'flex',
    flexWrap: 'nowrap',
    height: '100%',
    flexDirection: "row"}}>
        <LeftHandMenu />
        <Chat />
    </View>)

}
