import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import { COLORS } from '../../constants/theme'
import { TypesTodoList } from './todo.reducer'

interface TypeTodoItem {
    itemParams: TypesTodoList
}

export const TodoItem = (props: TypeTodoItem) => {
    let isLocation = props.itemParams.location.split('').length > 0 ? <View style={styles.images}><SvgUri width="15" height="15" source={require('../../assets/icons/location.svg')} /></View> : null;
    let isPhoto = props.itemParams.photoUrl.split('').length > 0 ? <View style={styles.images}><SvgUri width="15" height="15" source={require('../../assets/icons/photo.svg')} /></View> : null;
    let isVideo = props.itemParams.video.split('').length > 0 ? <View style={styles.images}><SvgUri width="15" height="15" source={require('../../assets/icons/video.svg')} /></View> : null;

    return (
        <View style={styles.task_view}>
            <Text style={styles.text}>{props.itemParams.title}</Text>
            {/* <Text style={styles.text}>{props.itemParams.description}</Text> */}
            <View style={styles.icon_cont}>
                {isLocation}
                {isPhoto}
                {isVideo}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    task_view: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        margin: 15
    },
    icon_cont: {
        flexDirection: 'row',
        right: 0
    },
    text: {
        flex: 1,
        alignSelf: 'center',
        fontSize: 14
    }, 
    images: {
        width: 25,
        height: 25,
        margin: 5,
        backgroundColor: COLORS.main,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: COLORS.border_but_color,
        borderWidth: 1
    }
})