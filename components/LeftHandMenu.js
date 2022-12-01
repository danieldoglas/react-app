import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function LeftHandMenu({navigation, route}) {
  return (
    <View style={{
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: "35%",
      }}>
        
      <Text>LeftHandMenu</Text>
    </View>
  )
}