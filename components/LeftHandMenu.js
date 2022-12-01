import { View, Button, StyleSheet, Text} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function LeftHandMenu({navigation, route, isSmallScreenWidth}) {
    const navigateToChat = function() {
        debugger;
        navigation.navigate("/Chat");
    };
    const isSmallScreen = route ? route.params.isSmallScreenWidth : isSmallScreenWidth;
    return (
    <SafeAreaView style={{...styles.container, width: isSmallScreen ? "100%" : "35%"}}>
        <View style={styles.header}>
            <Text>Expensify App</Text>
        </View>
        <View style={styles.cardView}>
            <Button onPress={navigateToChat} title='User 1'></Button>
        </View>
        <View style={styles.cardView}>
            <Button title='User 2'></Button>
        </View>
        <View style={styles.cardView}>
            <Button title='User 3'></Button>
        </View>
        <View style={styles.cardView}>
            <Button title='User 4'></Button>
        </View>
        <View style={styles.cardView}>
            <Button title='User 5'></Button>
        </View>
    </SafeAreaView>
  )

}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
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