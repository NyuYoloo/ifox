import React from 'react';
import { StyleSheet, Platform, Image, Text, View, FlatList, TouchableHighlight, Dimensions } from 'react-native';
import * as firebase from 'firebase'
import { db }  from './Config/Config'

let itemsRef = db.ref('/items');
const { width: WIDTH} = Dimensions.get('window')


export default class HomeScreen extends React.Component {
  state = {
    items: []
  }
  
  componentDidMount() {
    itemsRef.on('value', snapshot => {
      let data = snapshot.val()
      let items = Object.values(data)
      this.setState({ items })
    })
  }
  
  goToListItem = (data) => {
    this.props.navigation.navigate('Item', {data})
  }
  
  renderItem = ({item}) => {
    return (
      <TouchableHighlight onPress={() => this.goToListItem(item)} style={styles.containerItem}>
        <Text style={{color: 'white', textAlign: 'center'}}>{item.message}</Text>
      </TouchableHighlight>
    )
  }

  render() {
    return (
        <View style={styles.container}>
          {this.state.items.length > 0 ? (
            <FlatList  data={this.state.items} renderItem={this.renderItem}/>
            ) : (
            <Text>Add your first item</Text>
          )}
        </View>
      )
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerItem: {
    backgroundColor: '#F45B69',
    width: WIDTH - 40,
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
    borderRadius: 10
  },


})