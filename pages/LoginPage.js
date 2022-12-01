import { View, Text, Button } from 'react-native'
import React from 'react'

export default function LoginPage({route}) {
    const onPress = () => {
      debugger;
      route.params.callbackFunction(true);
    }
  return (
    <View>
      <Text>Click below to login</Text>
      <Button onPress={onPress} title="Login" />
    </View>
  )
}