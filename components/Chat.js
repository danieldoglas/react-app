import { View, Text } from 'react-native'
import React from 'react'

export default function Chat({navigation, routes}) {
  return (
    <View style={{
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: "64%",
      }}>
      <Text>Chat</Text>
    </View>
  )
}