import { View, Text } from 'react-native'
import React from 'react'

export default function Chat({navigation, route, isSmallScreenWidth}) {
    const isSmallScreen = route ? route.params.isSmallScreenWidth : isSmallScreenWidth;
  return (
    <View style={{
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: isSmallScreen ? "100%" : "65%",
      }}>
      <Text>Chat</Text>
    </View>
  )
}