import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import FetchLocation from './components/FetchLocation';
import UsersMap from './components/UsersMap';
import Geolocation from '@react-native-community/geolocation';

interface AppStates {
  userLocation: {
    latitude: Number,
    longitude: Number,
    latitudeDelta: Number,
    longitudeDelta: Number
  }
}

export default class App extends React.Component<{}, AppStates> {

  constructor(props: any) {
    super(props);
    this.state = {
      userLocation: null
    }
  }

  getUserLocationHandler = () => {
    Geolocation.getCurrentPosition((position: any) => {
      console.log(position);
      this.setState({
        userLocation: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0,
          longitudeDelta: 0
        }
      });

    }, (error: any) => {
      console.log(error);
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <UsersMap userLocation={this.state.userLocation}/>
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
