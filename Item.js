import React from 'react'
import {Text, View} from 'react-native'
import { Button } from 'native-base'
import * as firebase from 'firebase'

import { db }  from './Config/Config'


export default class ItemScreen extends React.Component {
  render () {

    const {state} = this.props.navigation;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{state.params.data.message}</Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Button full rounded primary style={{width: 70}}>
            <Text style={{color: 'white'}}>Modify</Text>
          </Button>
          <Button full rounded danger onPress={() => this._onDelete(state.key)} style={{width: 70}}>
            <Text style={{color: 'white'}}>Delete</Text>
          </Button>
        </View>
      </View>
    )
  }

  _onDelete = (key) => {
    db.ref('/items' + key).remove();
  }
}