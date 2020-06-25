import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, ActivityIndicator } from 'react-native';

import * as firebase from "firebase";

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default class LoadingScreen extends Component {

  static navigationOption = {
    title : "Loading",
    header : null
  }

  componentDidMount (){
    firebase.auth().onAuthStateChanged((authenticate) => {
      if (authenticate) {
        this.props.navigation.navigate("Home")
      } else {
        this.props.navigation.navigate("SignIn");
      }
    });
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>LoadingScreen s !</Text>
        <ActivityIndicator size ="large"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
