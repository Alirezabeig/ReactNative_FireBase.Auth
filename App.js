import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import * as firebase from 'firebase';

import HomeScreen from './components/HomeScreen';
import LoadingScreen from './components/LoadingScreen';
import SignInScreen from './components/SignIn';
import SignUpScreen from './components/SignUp';

var firebaseConfig = {
    apiKey: "AIzaSyCP9y0ssJIbTkWf8yMGSI6F62gvB1ZADLA",
    authDomain: "signupapi-25c9e.firebaseapp.com",
    databaseURL: "https://signupapi-25c9e.firebaseio.com",
    projectId: "signupapi-25c9e",
    storageBucket: "signupapi-25c9e.appspot.com",
    messagingSenderId: "251648575479",
    appId: "1:251648575479:web:ffea1392fba363e38bd0f2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

// function Home({ navigation }) {
//   return (
//     <View style={{ flex: 1}}>
//       <HomeScreen/>
//       <Button
//         title="Go to Loading"
//         onPress={() => navigation.navigate('Loading')}
//       />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

// function Loading({ navigation }) {
//   return (
//     <View style={{ flex: 1}}>
//       <LoadingScreen/>
//     </View>
//   );
// }


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Loading" component={LoadingScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
