import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCYtkZxRBPZ1xxrKi0mjprgKGk6wzgVsQQ",
  authDomain: "neyesem-a0bca.firebaseapp.com",
  projectId: "neyesem-a0bca",
  storageBucket: "neyesem-a0bca.appspot.com",
  messagingSenderId: "1045169185864",
  appId: "1:1045169185864:web:09ceb3b341679ea102247d",
  measurementId: "G-SSCG1MCWTW"
};
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}}name="Login" component={LoginScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
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
