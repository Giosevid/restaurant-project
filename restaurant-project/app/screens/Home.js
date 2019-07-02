import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Home = () => {
    return (
        <View style={style.viewBody}>
            <Text>Home Screen</Text>
        </View>
    )
}

const style = StyleSheet.create({
    viewBody: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'

    }
})

export default Home