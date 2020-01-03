import React from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import {NavigationInjectedProps} from 'react-navigation';
import {TodoItem} from './todo-list-item';
import {COLORS} from '../../constants/theme';
import {STRINGS} from '../../constants/strings';
import {ROUTES} from '../../constants/routes';
import {ITodoReducer} from './todo.reducer';
import {IStore} from '../../services/redux/reducer'

const TodoListComp = (props: ITodoReducer & NavigationInjectedProps) => {
  const navigate = () => {
    props.navigation.navigate(ROUTES.AddItem);
  };

  const renderItem = ({item}: any) => (
    <TodoItem navigation={props.navigation} itemParams={item} />
  )

  return (
    <View style={styles.tasks}>
      <Text style={{alignSelf: 'center'}}>{STRINGS.TODO_MAIN.head_text}</Text>
      <FlatList
        indicatorStyle={'black'}
        data={props.todoList}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <TouchableOpacity style={styles.button_add} onPress={navigate}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (store: IStore) => {
  return {
    todoList: store.todoReducer.todoList,
  };
};

export const TodoList = connect(mapStateToProps)(TodoListComp);

const styles = StyleSheet.create({
  tasks: {
    flex: 1,
    margin: 15,
  },
  text: {
    alignSelf: 'center',
    fontSize: 14,
  },
  button_add: {
    position: 'absolute',
    backgroundColor: COLORS.main,
    borderRadius: 25,
    padding: 15,
    paddingHorizontal: 20,
    opacity: 0.5,
    alignSelf: 'center',
    bottom: 0,
    right: 0,
  },
  buttons: {
    flex: 1,
    backgroundColor: COLORS.main,
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    opacity: 0.5,
  },
});
