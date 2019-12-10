import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import FetchLocation from './components/FetchLocation';
import Geolocation from '@react-native-community/geolocation';

export default class App extends React.Component {

  getUserLocationHandler = () => {
    Geolocation.getCurrentPosition((position: any) => {
      console.log(position);
    }, (error: any) => {
      console.log(error);
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <FetchLocation onGetLocation={this.getUserLocationHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
