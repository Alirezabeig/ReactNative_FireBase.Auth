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

  signInUser = (email, password) => {
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      this.props.navigation.navigate("Profile")
    })
    .catch(error => {
      alert(error.message)
    })
  }

  render(){
    const {email, password} = this.state;
    return (
      <View style= {styles.containers}>
      <KeyboardAvoidingView>
      <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/logo.png')}
      />
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
          title={'SignIn'}
          style={styles.inputButton}
          onPress={() => this.signInUser(email, password) }
          //onPress={this.onLogin.bind(this)}
        ><Text style={{marginLeft: 120}}>Sign In</Text></Button>

        <TouchableOpacity
        onPress={() => this.props.navigation.navigate('SignUp')}
        style= {styles.newAccount} >
        <Text>Create a New Account?</Text>
        </TouchableOpacity>

      </View>
      </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginTop : 300,
  },
  containers: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    width: 300,
    height: 44,
    padding: 10,
    borderWidth: 0.3,
    borderColor: 'black',
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  inputButton: {
    width: 300,
    height: 44,
    padding: 10,
    borderWidth: 0.2,
    borderColor: 'black',
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "#ff4301",
  },
  newAccount: {
    width: 200,
    height: 44,
    padding: 10,
    borderColor: 'black',
    marginBottom: 10,
  },
  tinyLogo: {
    width: 66,
    height: 78,

    marginBottom: 40,
  },
});
