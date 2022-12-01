import { View, Button, StyleSheet, Text} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function LeftHandMenu({navigation, route, isSmallScreenWidth}) {
    const navigateToChat = function() {
        // This navigation works only when on mobile, since this is a part of 
        navigation.navigate("Chat");
    };
    const isSmallScreen = route ? route.params.isSmallScreenWidth : isSmallScreenWidth;
    return (
    <SafeAreaView style={{...styles.container, width: isSmallScreen ? "100%" : "35%"}}>
        <View style={styles.header}>
            <Text>Expensify App</Text>
        </View>
        <View style={styles.cardView}>
            <Button onPress={() => navigation.navigate("Chat") } title='Navigate to Chat'></Button>
        </View>
        <View style={styles.cardView}>
            <Button onPress={() => navigation.navigate("Settings") } title='Navigate to Settings (Level 1)'></Button>
        </View>
    </SafeAreaView>
  )

}
const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        height: '100%'
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        height: "5%"
    },
    cardView: {
        alignItems: 'center',
        justifyContent: 'center',
        height: "5%"
    }
});