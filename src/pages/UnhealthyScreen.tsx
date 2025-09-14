// UnhealthyScreen.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/core';
import { CommonActions } from '@react-navigation/native';
import Interaction from './Interaction';


const UnhealthyScreen = ({ actionableSteps, chemicals, disease, plant }) => {
    //const formattedSteps = actionableSteps.join('\n\n');
    
    const navigateToScreen = (screenName: any) => {
        navigation.dispatch(
          CommonActions.navigate({
            name: screenName,
          })
        );
      }
    
      const navigation = useNavigation();

    const interactModel = () => {
        navigation.navigate(Interaction)

      };

      

  
    return (
        <View style={styles.container}>
        <View style={styles.box}>
        <Animatable.View
                style={styles.box}
                animation="fadeIn"
                iterationCount="infinite"
                duration={1000}
            >
            <Text style ={styles.title}>Hey your {plant} plant might currently have a disease 😨</Text>
            </Animatable.View>
        </View>
        <View style={styles.redBox}>
            <Text style = {styles.title}>Disease detected: {disease}</Text>
        </View>
        <View style={styles.box}>
                <Text style={styles.title}>The steps that you can take are :</Text>
                {actionableSteps.map((step, index) => (
                    <View key={index} style={styles.actionableBox}>
                        <Text>{step}</Text>
                    </View>
                ))}
            </View>
            <Button title="Interact with Rishi" style = {styles.buttonContainer} onPress={interactModel} />
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
        marginHorizontal: 20,
    },
    box: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 8,
        marginVertical: 5,
    },
    actionableBox: {
        backgroundColor: 'yellow',
        fontSize:18,
        fontWeight:'bold',
        padding: 10,
        borderRadius: 8,
        marginVertical: 5,
    },
    redBox: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 8,
        marginVertical: 5,
    },
    buttonContainer: {
        backgroundColor: '#007bff', // Button background color
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
});

export default UnhealthyScreen;
