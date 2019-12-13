import React, { useState } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import { COLORS } from '../../constants/theme'
import { addItem } from '../todo-list/todo.actions'

const initialState = {
    title: '',
    description: '',
    photoUrl: '',
    video: '',
    location: ''
  }

const AddItemComp = (props: any) => {
const [state, setState] = useState(initialState);
    let butLocation = <TouchableOpacity style={styles.button_add}><SvgUri width="30" height="30" source={require('../../assets/icons/location.svg')} /></TouchableOpacity>
    let butPhoto = <TouchableOpacity style={styles.button_add}><SvgUri width="30" height="30" source={require('../../assets/icons/photo.svg')} /></TouchableOpacity>
    let butVideo = <TouchableOpacity style={styles.button_add}><SvgUri width="30" height="30" source={require('../../assets/icons/video.svg')} /></TouchableOpacity>

    return (
        <View style={styles.add_item_view}>
            <View style={{ alignItems: "center" }}>
                <Text>HEAD</Text>
                <TextInput
                    style={[styles.input, styles.stucture_comp]}
                    onChangeText={text => setState(currentState => ({  ...currentState, title: text }))}
                />
            </View>
            <View style={styles.stucture_comp}>
                <Text>DESCRIPTION</Text>
                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    style={[styles.input_descript, styles.stucture_comp]}
                    onChangeText={text => setState(currentState => ({  ...currentState, description: text }))}
                />
            </View>
            <View style={[styles.but_container, styles.stucture_comp]}>
                {butLocation}
                {butPhoto}
                {butVideo}
            </View>
            <TouchableOpacity 
            style={[styles.but, styles.stucture_comp]}
             onPress={() => props.addItem(state)}
            ><Text>POST</Text></TouchableOpacity>
        </View>
    )
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addItem: (state) => dispatch(addItem(state))
    }
}

export const AddItem = connect(null, mapDispatchToProps)(AddItemComp)

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