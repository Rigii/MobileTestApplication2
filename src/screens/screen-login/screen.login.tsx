import React from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
// import { createDrawerNavigator } from 'react-navigation-drawer';
import { ROUTES } from '../../constants/routes'

export class LoginScreen extends React.Component<NavigationInjectedProps> {

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => {
                        this.props.navigation.navigate(ROUTES.Drawer, {
                            itemId: 86,
                            otherParam: { name: 'Vasia', lastName: 'Bobrov' },
                        });
                    }}>
                        <Text style={{alignSelf: 'center', fontSize: 14}}>GO TO PROFILE</Text>
                </TouchableOpacity>
                <Button
                    title="Go to profile"
                    onPress={() => {
                        this.props.navigation.navigate(ROUTES.Drawer, {
                            itemId: 86,
                            otherParam: { name: 'Vasia', lastName: 'Bobrov' },
                        });
                    }}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
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