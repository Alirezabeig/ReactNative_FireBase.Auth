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

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});
//<Button title="Go back" onPress={() => this.props.navigation.goBack()} />

export default class ProfileScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
    email : '',
    name: ''
  }
  }

  static navigationOption = {
    title : "Profile",
    header : null
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged(authenticate => {
      if(authenticate){
        this.setState({
          email :authenticate.email,
          name: authenticate.displayName,
        })
      } else {
        this.props.navigation.navigate("SignIn")
      }
    })
  }
signOutUser =() => {
  firebase
  .auth()
  .signOut()
  .then(()=> {
    console.log("Sign Out")
  })
  .catch(error => alert(error.message))
}
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
        You are signed in as {this.state.name} with email:{this.state.email} </Text>

        <TouchableOpacity
        onPress={() => this.signOutUser()}
        style= {styles.newAccount} >
        <Text>Log out</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
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
