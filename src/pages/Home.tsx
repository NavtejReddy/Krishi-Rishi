import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native';

//import cameraPage from './cameraPage';
import { useNavigation } from '@react-navigation/core';
import { CommonActions } from '@react-navigation/native';
import CameraPage from './CameraPage';

export default function HomeScreen() {
    
    const navigation = useNavigation();

    const navigateToScreen = (screenName: any) => {
        navigation.dispatch(
          CommonActions.navigate({
            name: screenName,
          })
        );
      }

    const handleCameraPress = () => {
        //navigateToScreen(cameraPage)
        navigation.navigate(CameraPage)
    };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/leaf.png')}
        style={styles.backgroundImage}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Krishi Rishi</Text>
          <View style={styles.buttonContainer}>
            <Button
              title="Go to Camera"
              onPress={handleCameraPress}
              color="#ffffff" // Button text color
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
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


