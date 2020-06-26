import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Button, Image } from 'react-native';


const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});
//<Button title="Go back" onPress={() => this.props.navigation.goBack()} />

export default class HomeScreen extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>HomeScreen !</Text>
        <View >
        <Button
       title="SignIn"
          onPress={() => this.props.navigation.navigate('Loading')}
           />

           <Button
          title="SignUp"
             onPress={() => this.props.navigation.navigate('SignUp')}
              />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',

  },
  instructions: {
    textAlign: 'center',
    color: '#333333',

  },
  tiny: {
    position : 'absolute',

  },
});
