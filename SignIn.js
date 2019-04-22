import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, ImageBackground, Image, TextInput, Dimensions} from 'react-native'
import { Container, Header, Content, Button } from 'native-base';
import bgImage from './assets/bg.jpg'
import * as firebase from 'firebase'

const { width: WIDTH} = Dimensions.get('window')


export default class SignInScreen extends Component {
  state = { email: '', password: '', errorMessage: null, userName: '' }
//  handleLogin = () => {
//    firebase
//      .auth()
//      .signInWithEmailAndPassword(email, password)
//      .then(() => this.props.navigation.navigate('Home'))
//      .catch(error => this.setState({ errorMessage: error.message }))
//  }

  static navigationOptions = {
    header: null,
  }
  
  render() {
    return (
      <ImageBackground source={bgImage} style={styles.bgContainer}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>React Native</Text>
        </View>

        <View style={styles.containerInput}>
          <TextInput style={styles.input} placeholder={'Username'} placeholderTextColor={'rgba(255, 255, 255, 0.7)'} underlineColorAndroid='transparent'/>
        </View>
        <View style={styles.containerInput}>
          <TextInput style={styles.input} placeholder={'Password'} placeholderTextColor={'rgba(255, 255, 255, 0.7)'} underlineColorAndroid='transparent'/>
        </View>
        <View style={styles.containerButton}>
          <Button full rounded primary style={styles.Button}><Text style={styles.TextButton}>Login</Text></Button>
        </View>
        <View style={styles.containerButton}>
          <Button style={styles.Button}
            full
            rounded
            primary
            onPress={() => this.loginWithFacebook()}
          >
            <Text style={{ color: 'white' }}> Login With Facebook</Text>
          </Button>
        </View>
      </ImageBackground>
    )
  }

  async loginWithFacebook() {

    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('447687132455670', { permissions: ['public_profile'] })

    if (type == 'success') {
      const credential = firebase.auth.FacebookAuthProvider.credential(token)

      firebase.auth().signInAndRetrieveDataWithCredential(credential).catch((error) => {
        console.log(error)
      })

      firebase.auth().signInAndRetrieveDataWithCredential(credential)
        .then((result) => {
          var user = result.user;
          this.props.navigation.navigate('Home')
        })
    }
  }
}

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center'
  },
  logo: {
    width: 30,
  },
  logoText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '500',
    marginTop: 10,
    opacity: 0.5
  },
  containerInput: {
    marginTop: 20
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25
  },
  containerButton: {
    marginTop: 20,
    textAlign: 'center'
  },
  Button: {
    width: WIDTH - 150,
    textAlign: 'center',
  },
  TextButton: {
    color: 'white',
  }
});