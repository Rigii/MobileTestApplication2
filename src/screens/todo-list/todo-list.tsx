import React from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import { TodoItem } from './todo-list-item'
import { COLORS } from '../../constants/theme'
import { STRINGS } from '../../constants/strings'
// import { createDrawerNavigator } from 'react-navigation-drawer';

export class TodoList extends React.Component<NavigationInjectedProps> {

    render() {
        return (
            <View style={styles.tasks}>
                <Text>{STRINGS.TODO_MAIN.head_text}</Text>
                <TodoItem
                    title={'Vasia'}
                />
                <TouchableOpacity style={styles.button_add}>
                    <Text>+</Text>
                </TouchableOpacity>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    tasks: {
        flex: 1,
        alignItems: 'center',
        margin: 15
    },
    text: {
        alignSelf: 'center',
        fontSize: 14
    },
    button_add: {
        position: "absolute",
        backgroundColor: COLORS.main,
        borderRadius: 25,
        padding: 15,
        paddingHorizontal: 20,
        opacity: 0.5,
        alignSelf: 'center',
        bottom: 0,
        right: 0

    },
    buttons: {
        flex: 1,
        backgroundColor: COLORS.main,
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        opacity: 0.5
    }
})