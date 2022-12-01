import { View, Text, Button } from 'react-native'
import React from 'react'

export default function LoginPage({callbackFunction}) {
    const onPressCry = () => callbackFunction(true);
  return (
    <View>
      <Text>Click below to login</Text>
      <Button onPress={onPressCry} title="Login" />
    </View>
  )
}