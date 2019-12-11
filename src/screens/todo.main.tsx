import React from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
// import { createDrawerNavigator } from 'react-navigation-drawer';
import { ROUTES } from '../constants/routes'

export class ToDo extends React.Component<NavigationInjectedProps> {

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Tasks</Text>
                
                 
            </View>
        );
    }

}

const styles = StyleSheet.create({
    text: {
        alignSelf: 'center', 
        fontSize: 14
    },
    buttons: { 
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
        opacity: 0.5 
    }
})