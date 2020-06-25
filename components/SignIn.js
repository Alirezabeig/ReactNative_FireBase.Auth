import React, {Component} from 'react';
import { Platform,
   StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    Image,
    TouchableOpacity,
    TextInput
   } from 'react-native';
import * as firebase from 'firebase';
import {Form, Item, Input, Label, Button} from 'native-base';
import '../assets/logo.png';



const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
    email : '',
    password : '',
    }

  }
  static navigationOption = {
    title : "SignIn",
    header : null
  }

  render(){
    return (
      <KeyboardAvoidingView>
      <View style={styles.container}>
        <TextInput
          value={this.state.username}
          onChangeText={(email) => this.setState({ email })}
          placeholder={'email'}
          style={styles.input}
        />
        <TextInput
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'password'}
          secureTextEntry={true}
          style={styles.input}
        />

        <Button
          title={'Login'}
          style={styles.input}
          //onPress={this.onLogin.bind(this)}
        ><Text>LogIn</Text></Button>
      </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    marginTop : 300,
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});
