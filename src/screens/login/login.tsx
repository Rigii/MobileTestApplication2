import React from 'react';
import { connect } from 'react-redux';
import { TextInput, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import { ROUTES } from '../../constants/routes';
import { COLORS } from '../../constants/theme';
import { STRINGS } from '../../constants/strings';
import { setEmail } from './login.actions';

interface LoginProps extends NavigationInjectedProps{
email: string,
setEmail: any
}

class LoginScreenComp extends React.Component<LoginProps> {

    state = {
        currentTextVal: ''
    }

    setEmailGoToList = () => {
        if (this.state.currentTextVal.split('').length > 0){
        this.props.setEmail(this.state.currentTextVal)
            this.props.navigation.navigate(ROUTES.TodoList, {
                //otherParam: { name: 'Vasia', lastName: 'Bobrov' },
            });
        }
    }

    render() {
        return (
            <View style={styles.login_view}>
                <Text>{STRINGS.LOGIN.head_text}</Text>
                <TextInput
                    style={[styles.input, styles.login_comp]}
                    onChangeText={text => this.setState({ currentTextVal: text })}
                />
                <TouchableOpacity
                    style={[styles.but, styles.login_comp]}
                    onPress={() => { this.setEmailGoToList() }}>
                    <Text style={styles.text}>{STRINGS.LOGIN.actionButton}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = (store: any) => {
    return {
        todoList: store.loginReducer.todoList
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        setEmail: (email: string) => dispatch(setEmail(email))
    }
}

export const LoginScreen = connect(mapStateToProps, mapDispatchToProps)(LoginScreenComp)

const styles = StyleSheet.create({
    login_view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        margin: 15

    },
    login_comp: {
        marginTop: 20
    },
    input: {
        width: 350,
        height: 40,
        borderColor: COLORS.input_border,
        borderWidth: 1,
        borderRadius: 5
    },
    text: {
        alignSelf: 'center',
        fontSize: 14
    },
    but: {
        flex: 0,
        backgroundColor: COLORS.main,
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center'
    }
})