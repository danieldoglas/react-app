import { Text, Button} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';


export default function AddPaymentMethodPage({navigation}) {
  return (
<SafeAreaView style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
      }}>
      <Text>AddPaymentMethod Page</Text>
      <Button onPress={()=>{navigation.popToTop()}} title="Go to Top of Stack"></Button>
      <Button onPress={()=>{navigation.goBack()}} title="Go Back"></Button>
    </SafeAreaView>
  )
}