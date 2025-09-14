import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, TextInput } from 'react-native';

//import cameraPage from './cameraPage';
import { useNavigation } from '@react-navigation/core';
import { CommonActions } from '@react-navigation/native';

import { useRoute } from "@react-navigation/native"
import axios from "axios";

export default function Interaction() {
    

    let responseData = "Rishi response🧙🏽‍♂️:";
    const [responseText, setRespnseText] = useState('')
    const [inputText, setInputText] = useState('');

    const handleInputChange = (text) => {
        setInputText(text);
    };
    const handleButtonPress = () => {
        // Make a POST request using Axios
        const apiUrl = ;// fill your ngrok url here

// Define the data you want to send in the POST request
const postData = {
  key1: 'value1',
};

// Define the query parameters
const queryParams = {
  question: inputText,
};

// Make the POST request with query parameters
axios.post(apiUrl, postData, { params: queryParams })
  .then(response => {
    console.log('Response:', response.data);
    //responseData = response.data
    setRespnseText(response.data)
  })
  .catch(error => {
    console.error('Error:', error);
  });
  
/*
        axios.post('https://8824-35-224-146-29.ngrok-free.app/generate-response', {
            question: inputText
        })
        .then(response => {
            console.log('POST Response:', response.data);
            responseData = response.data
            // Handle response data as needed
        })
        .catch(error => {
            console.error('POST Error:', error);
            // Handle error as needed
        });
    };
    */
};
  return (
    <View style={styles.container}>
            <Text style={styles.title}>{responseData}</Text>
            <Text style={styles.model_reply}>{responseText}</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter text here"
                value={inputText}
                onChangeText={handleInputChange}
            />
            <Button
                title="Submit"
                onPress={handleButtonPress}
                style={styles.buttonContainer}
            />
        </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    model_reply:{
        fontSize: 13,
        color: 'black',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        width: '100%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginBottom: 20,
    },
    buttonContainer: {
        backgroundColor: '#007bff', // Button background color
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
});