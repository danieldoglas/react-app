import { Text, Button, View, Dimensions} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';


const initialDimensions = Dimensions.get('window');
const isSmallScreenWidth = initialDimensions.width <= 800;

export default function SettingsPage({navigation}) {
  return (
<SafeAreaView style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: isSmallScreenWidth ? '100%' : '30%',
        right: 0,
        position: 'absolute',
        backgroundColor: isSmallScreenWidth ? '' : 'blue'
      }}>
      <Text>Settings Page</Text>
      <View>
            <Button onPress={() => navigation.navigate("Profile") } title='Navigate to Profile (Level 2)'></Button>
        </View>
        <View>
            <Button onPress={() => navigation.navigate("Wallet") } title='Navigate to Wallet (Level 2)'></Button>
        </View>
        <View>
            <Button onPress={() => navigation.navigate("About") } title='Navigate to About (Level 2)'></Button>
        </View>
        <View>
            <Button onPress={() => navigation.navigate("PaymentMethods") } title='Navigate to PaymentMethods (Level 2)'></Button>
        </View>
      <Button onPress={()=>{navigation.goBack()}} title="Go Back"></Button>
    </SafeAreaView>
  )
}