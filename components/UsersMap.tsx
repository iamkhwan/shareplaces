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
    let userLocationMarker = null;
    if (props.userLocation) {
        userLocationMarker = <Marker coordinate={props.userLocation} />;
    }

    return (
        <View style={styles.mapContianer}>
            <MapView 
                style={styles.map} 
                initialRegion={{
                    latitude: (props.userLocation ? props.userLocation.latitude : 0 ),
                    longitude: (props.userLocation ? props.userLocation.longitude : 0 ),
                    latitudeDelta: 0.0622,
                    longitudeDelta: 0.0421
                }} 
                region={props.userLocation}>
                    { userLocationMarker }
            </MapView>
        </View>
    );
};

export default usersMap;
