import { Text, Button} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Chat({navigation, route, isSmallScreenWidth}) {
    const isSmallScreen = route ? (route.params ? route.params.isSmallScreenWidth : isSmallScreenWidth) : isSmallScreenWidth;
    const ID = route ? (route.params ? route.params.id : 123) : 123;
  return (
    <SafeAreaView style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: isSmallScreen ? '100%' : '65%',
        backgroundColor: isSmallScreen ? '' : 'pink'
      }}>
      <Text>Chat Page id: {ID}</Text>
      <Button onPress={()=>{navigation.navigate("About")}} title="Open About"></Button>
      <Button onPress={()=>{navigation.goBack()}} title="Go Back"></Button>
    </SafeAreaView>
  )
}