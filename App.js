import * as firebase from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import RandomFoodScreen from './screens/RandomFoodScreen';
import AllFoodsScreen from './screens/AllFoodsScreen';
import { getFirestore } from 'firebase/firestore';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//import { getAnalytics } from "firebase/analytics";
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import RecipeScreen from './screens/RecipeScreen';


const firebaseConfig = {
  apiKey: "AIzaSyCYtkZxRBPZ1xxrKi0mjprgKGk6wzgVsQQ",
  authDomain: "neyesem-a0bca.firebaseapp.com",
  projectId: "neyesem-a0bca",
  storageBucket: "neyesem-a0bca.appspot.com",
  messagingSenderId: "1045169185864",
  appId: "1:1045169185864:web:09ceb3b341679ea102247d",
  measurementId: "G-SSCG1MCWTW"
};

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});


const app = firebase.initializeApp(firebaseConfig);
export const db = getFirestore();
const auth = getAuth();
//const analytics = getAnalytics(app);


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

registerForPushNotificationsAsync = async () => {
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    const token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
    this.setState({ expoPushToken: token });
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  

};



function DrawerNav(){
  return (
    <Drawer.Navigator screenOptions={{drawerActiveTintColor:'orange'}}>
      <Drawer.Screen options={{title:"Home"}} name="BottomNav" component={BottomNav}/>
      <Drawer.Screen name="Random Food" component={RandomFoodScreen}/>
      <Drawer.Screen name="All Foods" component={AllFoodsScreen}/>
    </Drawer.Navigator>
  );
}

function BottomNav(){
  return(
    <Tab.Navigator screenOptions={{tabBarActiveTintColor:'orange'}}>
      <Tab.Screen options={{ headerShown: false, 
      tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="home" color={color} size={size} />)}} 
      name="Home" component={HomeScreen} />
      <Tab.Screen options={{ headerShown: false, 
      tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="account-cog" color={color} size={size} />)}} 
      name="Settings" component={SettingsScreen}/>
    </Tab.Navigator>
  )
}

export default class App extends React.Component {
  state = {
    notification: {},
  };
  
  componentDidMount() {
    registerForPushNotificationsAsync();
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen}/>
          <Stack.Screen options={{ headerShown: false }} name="Drawer" component={DrawerNav}/>
          <Stack.Screen  name="RecipeScreen" component={RecipeScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
