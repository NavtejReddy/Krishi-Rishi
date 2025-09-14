import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

//import cameraPage from './cameraPage';
import { useNavigation } from '@react-navigation/core';
import { CommonActions } from '@react-navigation/native';
import CameraPage from './CameraPage';
import { useRoute } from "@react-navigation/native"

import HealthyScreen from './HealthyScreen';


import UnhealthyScreen from './UnhealthyScreen';

export default function ReportPage() {
    const route = useRoute();
    const responseData = route.params?.responseData;
    const navigation = useNavigation();

    useEffect(() => {
        console.log("responseData:", responseData);
    }, [responseData]);

    const navigateToScreen = (screenName) => {
        navigation.dispatch(
            CommonActions.navigate({
                name: screenName,
            })
        );
    }

    return (
        <View style={styles.container}>
            <Text>Plant Report</Text>
            {responseData.disease === 'healthy' ? (
                <HealthyScreen disease ={responseData.disease} plant ={responseData.plant}/>
            ) : (
                <UnhealthyScreen actionableSteps={responseData.actionable_steps} chemicals = {responseData.chemicals} disease ={responseData.disease} plant ={responseData.plant}/>
            )}
        </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
