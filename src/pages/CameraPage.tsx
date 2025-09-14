import React from 'react';
//import EditScreenInfo from '@/components/EditScreenInfo';

import { Camera, CameraType } from 'expo-camera';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

import { auth, db, storage } from "../../firebase";
import axios from "axios";

import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";

import * as firebase from 'firebase/app';
import 'firebase/storage';

import { useNavigation } from '@react-navigation/core';
import { CommonActions } from '@react-navigation/native';

import ReportPage from './ReportPage';

export default function CameraPage() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [camera, setCamera] = useState<Camera | null>(null);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [imageUri, setImageUri] = useState<string | null>(null);

  const navigation = useNavigation();

  const navigateToScreen = (screenName: any) => {
    navigation.dispatch(
      CommonActions.navigate({
        name: screenName,
      })
    );
  }


  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (camera) {
      const photo = await camera.takePictureAsync({ base64: true });
      setImageUri(photo.uri);
    }
  };

  const uploadToFirebase = async () => {
    try {
      if (imageUri) {
        const response = await fetch(imageUri);
        const blob = await response.blob();
        //const imageName = `image_${Date.now()}.jpg`;
        const storageRef = ref(storage,`test_image.jpg`)
        //const storageRef = firebase.storage().ref().child(`images/test_image2.jpg`);
        await uploadBytes(storageRef, blob).then(async (snapshot) => {
            console.log("Uploaded a blob or file!");
            const response = await axios.get(
                // ngrok request
              `https://8824-35-224-146-29.ngrok-free.app/get_plant_info`
            );
          

          navigation.dispatch(
            CommonActions.navigate({
              name: "ReportPage",
              params: {
                responseData: response.data, // Pass the response data as a parameter
              },
            })
          );
          

        });
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image.');
    }
  };

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        type={type}
        ref={(ref) => setCamera(ref)}
      >
        <View style={styles.container}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#3498db' }]} // Blue background color
            onPress={takePicture}
          >
            <Text style={styles.captureText}>Take Picture</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#2ecc71' }]} // Green background color
            onPress={toggleCameraType}
          >
            <Text style={styles.captureText}>Toggle Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera>
      {imageUri && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: imageUri }} style={styles.image} />
          <Button title="Upload to Firebase" onPress={uploadToFirebase} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 150, // Set button width
    height: 50, // Set button height
    marginBottom: 10, // Add space between buttons
  },
  captureText: {
    color: '#ffffff', // White color
    fontSize: 18,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
});