import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const styles = StyleSheet.create({
    mapContianer: {
        width: '100%',
        height: 200,
        marginBottom: 20
    },
    map: {
        width: '100%',
        height: '100%'
    }
});

const usersMap = (props: any) => {
    let userLocationMarker = null, usersMarkers = null;
    if (props.userLocation) {
        console.log(props.userLocation);
        userLocationMarker = <Marker coordinate={props.userLocation} />;
    }

    if (props.usersPlaces) {
        usersMarkers = props.usersPlaces.map((userPlace: any) => {
            console.log(userPlace);
            return <Marker coordinate={userPlace} key={userPlace.id} />
        });
    }

    return (
        <View style={styles.mapContianer}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 37.785834,
                    longitude: -122.406417,
                    latitudeDelta: 0.0622,
                    longitudeDelta: 0.0421
                }}
                region={props.userLocation}>
                {userLocationMarker}
                {usersMarkers}
            </MapView>
        </View>
    );
};

export default usersMap;
