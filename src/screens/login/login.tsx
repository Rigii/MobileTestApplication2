import React, { useState } from 'react';
import { connect } from 'react-redux';
import { TextInput, View, Text, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import { ROUTES } from '../../constants/routes';
import { COLORS } from '../../constants/theme';
import { STRINGS } from '../../constants/strings';
import { setEmail } from './login.actions';
import { getTodoList } from '../todo-list/todo.actions'
import { TypesTodoList } from '../todo-list/todo.reducer'

interface LoginProps extends NavigationInjectedProps{
email: string,
setEmail: (email: string) => string,
data: TypesTodoList[],
getTodoList: (parsedData: string) => void
}

interface IState {
    email: string
}

const initialState = {
    email: ''
}

const LoginScreenComp = (props: LoginProps ) => {
    const [state, setState] = useState<IState>(initialState);

    const setEmailGoToList = () => {
        if (state.email.length > 0){
        props.setEmail(state.email)
        getAsyncStorageData(state.email)
            props.navigation.navigate(ROUTES.TodoList);
        }
    }

    const getAsyncStorageData = async (email: string) => {
            try {
              const data = await AsyncStorage.getItem(email)
              if (!data) {
                return
              }
            let parsedData = JSON.parse(data)
            props.getTodoList(parsedData)
            
            } catch (error) {
              console.log('Getting async storage data error, or such storage does not exist.')
            }
    }

        return (
            <View style={styles.login_view}>
                <Text>{STRINGS.LOGIN.head_text}</Text>
                <TextInput
                    style={[styles.input, styles.login_comp]}
                    onChangeText={text => setState(currentState => ({ ...currentState, email: text }))}
                />
                <TouchableOpacity
                    style={[styles.but, styles.login_comp]}
                    onPress={() => { setEmailGoToList() }}>
                    <Text style={styles.text}>{STRINGS.LOGIN.actionButton}</Text>
                </TouchableOpacity>
            </View>
        );
}


const mapDispatchToProps = (dispatch: any) => {
    return {
        setEmail: (email: string) => dispatch(setEmail(email)),
        getTodoList: (data: string) => dispatch(getTodoList(data))
    }
}

export const LoginScreen = connect(null, mapDispatchToProps)(LoginScreenComp)

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