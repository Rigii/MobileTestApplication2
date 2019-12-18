import React, { useState } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import { ICONS } from '../../constants/icons'
import { COLORS } from '../../constants/theme'
import { ROUTES } from '../../constants/routes'
import { addItem } from '../todo-list/todo.actions'
import { STRINGS } from '../../constants/strings'

interface IState {
    title: string,
    description: string,
    photoUrl: string,
    video: string,
    location: string,
    id: number
}

const initialState = {
    title: '',
    description: '',
    photoUrl: '',
    video: '',
    location: '',
    id: 0
}

const AddItemComp = (props: any) => {

    const strings = STRINGS.ADD_ITEM
    const [state, setState] = useState<IState>(initialState);
    
    let butLocation = <TouchableOpacity style={styles.button_add}><SvgUri width="30" height="30" source={ICONS.location} /></TouchableOpacity>
    let butPhoto = <TouchableOpacity style={styles.button_add}><SvgUri width="30" height="30" source={ICONS.photo} /></TouchableOpacity>
    let butVideo = <TouchableOpacity style={styles.button_add}><SvgUri width="30" height="30" source={ICONS.video} /></TouchableOpacity>

    const postItem = () => {
        let settingObj = { ...state }
        settingObj.id = Math.random();
        (async () => {
            try {
                let newArr = [...props.todoList]
                newArr.push(settingObj)
                AsyncStorage.setItem(props.email, JSON.stringify(newArr))
                props.addItem(settingObj)
                props.navigation.navigate(ROUTES.TodoList)
            }
            catch (error) {
                console.log('Error AsyncStorage item setting')
            }
        })()
    }

    return (
        <View style={styles.add_item_view}>
            <View style={{ alignItems: "center" }}>
                <Text>{strings.head_text}</Text>
                <TextInput
                    style={[styles.input, styles.stucture_comp]}
                    onChangeText={text => setState(currentState => ({ ...currentState, title: text }))}
                />
            </View>
            <View style={styles.stucture_comp}>
                <Text>{strings.descript_text}</Text>
                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    style={[styles.input_descript, styles.stucture_comp]}
                    onChangeText={text => setState(currentState => ({ ...currentState, description: text }))}
                />
            </View>
            <View style={[styles.but_container, styles.stucture_comp]}>
                {butLocation}
                {butPhoto}
                {butVideo}
            </View>
            <TouchableOpacity
                style={[styles.but, styles.stucture_comp]}
                disabled={state.title.split('').length < 0}
                onPress={() => postItem()}
            ><Text>{strings.post_but}</Text></TouchableOpacity>
        </View>
    )
}

const mapStateToProps = (store: any) => {
    return {
        email: store.loginReducer.email,
        todoList: store.todoReducer.todoList
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addItem: (state: IState) => dispatch(addItem(state))
    }
}

export const AddItem = connect(mapStateToProps, mapDispatchToProps)(AddItemComp)

const styles = StyleSheet.create({
    add_item_view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        margin: 15

    },
    stucture_comp: {
        alignItems: 'center',
        marginTop: 20,
    },
    input: {
        width: 350,
        height: 40,
        borderColor: COLORS.input_border,
        borderWidth: 1,
        borderRadius: 5
    },
    input_descript: {
        width: 350,
        height: 350,
        borderColor: COLORS.input_border,
        borderWidth: 1,
        borderRadius: 5
    },
    text: {
        alignSelf: 'center',
        fontSize: 14
    },
    button_add: {
        backgroundColor: COLORS.main,
        borderRadius: 50,
        padding: 15,
        opacity: 0.5,
        borderColor: COLORS.border_but_color
    },
    but_container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around'
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