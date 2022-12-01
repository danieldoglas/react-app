import { Text, Button} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Chat({navigation, route, isSmallScreenWidth}) {
    const isSmallScreen = route ? route.params.isSmallScreenWidth : isSmallScreenWidth;
  return (
    <SafeAreaView style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
      }}>
      <Text>Chat Page</Text>
      <Button onPress={()=>{navigation.navigate("About")}} title="Open About"></Button>
      <Button onPress={()=>{navigation.goBack()}} title="Go Back"></Button>
    </SafeAreaView>
  )
}