import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import LoginScreen from './src/Pages/LoginScreen';
//import SignUp from './src/Pages/Signup';
//import BottomNav from './src/Pages/BottomNav';

import HomeScreen from './src/pages/Home';
import CameraPage from './src/pages/CameraPage';
import ReportPage from './src/pages/ReportPage';
import HealthyScreen from './src/pages/HealthyScreen';
import UnhealthyScreen from './src/pages/UnhealthyScreen';
import Interaction from './src/pages/Interaction';
//import UploadOptionsScreen from './src/pages/UploadOptionsScreen';
//import BottomNav from './src/pages/BottomNav';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={{headerShown: false}} name="HomeScreen" component={HomeScreen} />
        <Stack.Screen options={{headerShown: false}} name="CameraPage" component={CameraPage} />
        <Stack.Screen options={{headerShown: false}} name="ReportPage" component={ReportPage} />
        <Stack.Screen options={{headerShown: false}} name="Interaction" component={Interaction} />
        {/* <Stack.Screen options={{headerShown: false}} name="HealthyScreen" component={HealthyScreen} />
        <Stack.Screen options={{headerShown: false}} name="UnhealthyScreen" component={UnhealthyScreen} /> */}
        {/* <Stack.Screen name="UploadOptions" component={UploadOptionsScreen} /> */}
        {/* <Stack.Screen options={{headerShown: false}} name="BottomNav" component={BottomNav} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
