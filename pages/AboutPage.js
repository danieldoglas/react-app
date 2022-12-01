import { Text, Button} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';


export default function AboutPage({navigation}) {
  return (
<SafeAreaView style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
      }}>
      <Text>About Page</Text>
      <Button onPress={()=>{navigation.goBack()}} title="Go Back"></Button>
    </SafeAreaView>
  )
}