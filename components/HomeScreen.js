import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';


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
        <View style={{ flex: 1}}>

        <Button
       title="Go to Loading"
          onPress={() => this.props.navigation.navigate('Loading')}
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
