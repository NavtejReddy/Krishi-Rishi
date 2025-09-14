// HealthyScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



const HealthyScreen = ({ disease, plant }) =>  {
    return (
        <View style={styles.container}>
            <Text>The plant is identified as {plant}</Text>
            <Text style={styles.title}>Your plant is healthy and there is no need to worry!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'black',
        marginHorizontal: 20,
    },
});

export default HealthyScreen;
