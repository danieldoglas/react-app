import { View, Text, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginPage({route}) {
    const onPress = () => {
      route.params.callbackFunction(true);
    }
  return (
    <SafeAreaView>
      <Text>Click below to login</Text>
      <Button onPress={onPress} title="Login" />
    </SafeAreaView>
  )
}