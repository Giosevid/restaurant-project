import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const TopFive = () => {
    return (
        <View style={styles.container}>
            <Text>Top 5</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

export default TopFive
