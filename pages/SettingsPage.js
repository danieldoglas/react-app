import { Text, Button, View} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';


export default function SettingsPage({navigation}) {
  return (
<SafeAreaView style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
      }}>
      <Text>Settings Page</Text>
      <View>
            <Button onPress={() => navigation.navigate("Profile") } title='Navigate to Profile (Level 2)'></Button>
        </View>
        <View>
            <Button onPress={() => navigation.navigate("Wallet") } title='Navigate to Wallet (Level 3)'></Button>
        </View>
        <View>
            <Button onPress={() => navigation.navigate("About") } title='Navigate to About (Level 4)'></Button>
        </View>
      <Button onPress={()=>{navigation.goBack()}} title="Go Back"></Button>
    </SafeAreaView>
  )
}