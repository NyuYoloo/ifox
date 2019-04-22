import React from 'react';
import { StyleSheet, Platform, Image, Text, View, TouchableOpacity } from 'react-native';
import { Container, Header, Button, Left, Right, Body, Icon, Content} from 'native-base';
import * as firebase from 'firebase'

export default class ProfileScreen extends React.Component {
  state = { Username: '', Mail: ''}

componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({Username: currentUser.displayName}, () => this.secondFunc())
}

secondFunc = () => {
  const { currentUser } = firebase.auth()
  this.setState({Mail: currentUser.email})
}

signOutUser = async () => {
  try {
      await firebase.auth().signOut();
      this.props.navigation.navigate('SignIn');
  } catch (e) {
      console.log(e);
  }
}

render() {
  return (
      <Container style={styles.container}>
        <View style={styles.containerContent}>
          <Text style={styles.textUser}>{this.state.Username}</Text>
          <Text style={styles.textMail}>{this.state.Mail}</Text>
        </View>
        <View style={styles.containerButton}>
          <Button full rounded primary onPress={() => this.signOutUser()}><Text style={{color: 'white'}}>logout</Text></Button>
        </View>
      </Container>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F45B69'
  },

  containerContent: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  textUser: {
    fontSize: 25,
    marginBottom: 20,
    color: 'white'
  },

  textMail: {
    fontSize: 20,
    color: 'white'
  },

  containerButton: {
    width: 100,
    marginTop: 60
  }

})