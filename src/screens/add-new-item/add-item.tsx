import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import { COLORS } from '../../constants/theme'
import { setHead, addDescript, setVideo, addPhoto, addCoordinates } from './add-item.actions'

const AddItemComp = (props) => {
    let butLocation = <TouchableOpacity style={styles.button_add}><SvgUri width="30" height="30" source={require('../../assets/icons/location.svg')} /></TouchableOpacity>
    let butPhoto = <TouchableOpacity style={styles.button_add}><SvgUri width="30" height="30" source={require('../../assets/icons/photo.svg')} /></TouchableOpacity>
    let butVideo = <TouchableOpacity style={styles.button_add}><SvgUri width="30" height="30" source={require('../../assets/icons/video.svg')} /></TouchableOpacity>

    return (
        <View style={styles.add_item_view}>
            <View style={{ alignItems: "center" }}>
                <Text>HEAD</Text>
                <TextInput
                    style={[styles.input, styles.stucture_comp]}
                    onChangeText={text => props.setHead(text)}
                />
            </View>
            <View style={styles.stucture_comp}>
                <Text>DESCRIPTION</Text>
                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    style={[styles.input_descript, styles.stucture_comp]}
                    onChangeText={text => props.addDescript(text)}
                />
            </View>
            <View style={[styles.but_container, styles.stucture_comp]}>
                {butLocation}
                {butPhoto}
                {butVideo}
            </View>
            <TouchableOpacity style={[styles.but, styles.stucture_comp]}><Text>POST</Text></TouchableOpacity>
        </View>
    )
}

const mapStateToProps = store => {
    return {
        head: store.addItem.head,
        description: store.addItem.description,
        photo: store.addItem.photo,
        video: store.addItem.video,
        mapCoords: store.addItem.mapCoords
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setHead: (text: Text) => dispatch(setHead(text)),
        addDescript: (text: Text) => dispatch(addDescript(text)),
        setVideo: () => dispatch(setVideo()),
        addPhoto: () => dispatch(addPhoto()),
        addCoordinates: () => dispatch(addCoordinates())
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