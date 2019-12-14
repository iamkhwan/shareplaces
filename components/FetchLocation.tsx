import React from 'react';
import { StyleSheet, TouchableHighlight, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
      },
});

const fetchLocation = (props: any) => {
    return (
        <TouchableHighlight 
            style={styles.button}
            onPress={props.onGetLocation}>
            <Text>Get Location</Text>
        </TouchableHighlight>
    );
};

export default fetchLocation;