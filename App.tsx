import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import FetchLocation from './components/FetchLocation';
import UsersMap from './components/UsersMap';
import Geolocation from '@react-native-community/geolocation';

interface AppStates {
  userLocation: {
    latitude: Number,
    longitude: Number,
    latitudeDelta: Number,
    longitudeDelta: Number
  },
  usersPlaces: any[]
}

export default class App extends React.Component<{}, AppStates> {

  constructor(props: any) {
    super(props);
    this.state = {
      userLocation: null,
      usersPlaces: []
    }
  }

  getUserLocationHandler = () => {
    Geolocation.getCurrentPosition((position: any) => {
      this.setState({
        userLocation: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0,
          longitudeDelta: 0
        }
      });

      fetch("https://shareplaces-1576312403307.firebaseio.com/places.json", {
        method: "POST",
        body: JSON.stringify({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      })
        .then((res: any) => { console.log(res); })
        .catch((err: any) => { console.log(err); });

    }, (error: any) => {
      console.log(error);
    });
  };

  getUserPlacesHandler = () => {
    fetch("https://shareplaces-1576312403307.firebaseio.com/places.json")
      .then((res: any) => res.json())
      .then((parsedRes: any) => {
        const placesArray = [];
        for (const key in parsedRes) {
          placesArray.push({
            latitude: parsedRes[key].latitude,
            longitude: parsedRes[key].longitude,
            id: key
          });
        }

        this.setState({
          usersPlaces: placesArray
        });
      })
      .catch((err: any) => { console.log(err) });
  };

  render() {
    return (
      <View style={styles.container}>
        <UsersMap userLocation={this.state.userLocation} usersPlaces={this.state.usersPlaces} />
        <FetchLocation onGetLocation={this.getUserLocationHandler} />
        <View style={{ marginTop: 20 }}>
          <TouchableHighlight style={styles.button} onPress={this.getUserPlacesHandler}>
            <Text>Get User Places</Text>
          </TouchableHighlight>
        </View>

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
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
});
