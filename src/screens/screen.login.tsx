import React from 'react';
import { TextInput, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
// import { createDrawerNavigator } from 'react-navigation-drawer';
import { ROUTES } from '../constants/routes'

export class LoginScreen extends React.Component<NavigationInjectedProps> {

    render() {
        return (
            <View style={styles.loginView}>
                <Text>LOGIN SCREN</Text>
                <TextInput
                    style={[styles.input, styles.login_comp]}
                    //onChangeText={text => onChangeText(text)}
                    //value={value}
                />
                <TouchableOpacity
                    style={[styles.but, , styles.login_comp]}
                    onPress={() => {
                        this.props.navigation.navigate(ROUTES.ToDo, {
                            //otherParam: { name: 'Vasia', lastName: 'Bobrov' },
                        });
                    }}
                >
                    <Text style={styles.text}>GO TO PROFILE</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    loginView: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        alignContent: 'center',

    },
    login_comp: {
        marginTop: 20
    },
    input: {
        width: 350, 
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius: 5
    },
    text: {
        alignSelf: 'center',
        fontSize: 14
    },
    but: {
        flex: 0,
        backgroundColor: 'orange',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center'
    }
})