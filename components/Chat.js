import { View, Text } from 'react-native'
import React from 'react'

export default function Chat({navigation, route}) {
  return (
    <View style={{
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: route.params.isSmallScreenWidth ? "100%" : "65%",
      }}>
      <Text>Chat</Text>
    </View>
  )
}