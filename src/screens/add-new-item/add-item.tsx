import React, {useState} from 'react';
import {connect} from 'react-redux';
import {changeData} from '../../services/api-service';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import {NavigationInjectedProps} from 'react-navigation';
import SvgUri from 'react-native-svg-uri';
import {ICONS} from '../../constants/icons';
import {COLORS} from '../../constants/theme';
import {ROUTES} from '../../constants/routes';
import {addItem} from '../todo-list/todo.actions';
import {STRINGS} from '../../constants/strings';
import {ITodoReducer, TypesTodoList} from '../todo-list/todo.reducer';
import {IStore} from '../../services/redux/reducer';

interface IProps extends NavigationInjectedProps {
  addItem: (item: TypesTodoList) => void;
  email: string;
  todoList: TypesTodoList[];
}

export const initialState = {
  title: '',
  description: '',
  photoUrl: '',
  video: '',
  location: '',
  id: Math.random(),
};

export const AddItemComp = (props: ITodoReducer & IProps) => {
  const strings = STRINGS.ADD_ITEM;
  const [state, setState] = useState<TypesTodoList>({
    ...initialState,
    id: Math.random(),
  });

  const iconsArr = [
    {icon: ICONS.location, route: ROUTES.UserMap},
    {icon: ICONS.photo, route: ROUTES.UserCamera},
    {icon: ICONS.video, route: ROUTES.UserCamera},
  ];

  const postItem = async () => {
    try {
      await changeData(`/users/${props.email.toLowerCase()}`, [
        ...props.todoList,
        state,
      ]);
      props.addItem(state);
      props.navigation.navigate(ROUTES.TodoList);
    } catch (error) {
      console.log(`Error ${error}`);
    }
  };

  const setTitle = (title: string) =>
    setState(currentState => ({...currentState, title}));
  const setDescription = (description: string) =>
    setState(currentState => ({...currentState, description}));

  return (
    <View style={styles.add_item_view}>
      <View style={{alignItems: 'center'}}>
        <Text>{strings.head_text}</Text>
        <TextInput
          testID="setTitle"
          style={[styles.input, styles.stucture_comp]}
          onChangeText={setTitle}
        />
      </View>
      <View style={styles.stucture_comp}>
        <Text>{strings.descript_text}</Text>
        <TextInput
          testID="setDescription"
          multiline={true}
          numberOfLines={4}
          style={[styles.input_descript, styles.stucture_comp]}
          onChangeText={setDescription}
        />
      </View>
      <View style={[styles.but_container, styles.stucture_comp]}>
        {iconsArr.map((obj, index) => {
          return (
            <TouchableOpacity 
            key={index} 
            style={styles.button_add}
            onPress={() => props.navigation.navigate(obj.route)}
            >
              <SvgUri width="30" height="30" source={obj.icon} />
            </TouchableOpacity>
          );
        })}
      </View>
      <TouchableOpacity
        testID="postBut"
        style={[styles.but, styles.stucture_comp]}
        disabled={state.title.length < 0}
        onPress={postItem}>
        <Text>{strings.post_but}</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (store: IStore) => {
  return {
    email: store.loginReducer.email,
    todoList: store.todoReducer.todoList,
  };
};

const mapDispatchToProps = {
  addItem,
};

export const AddItem = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddItemComp);

const styles = StyleSheet.create({
  add_item_view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    margin: 15,
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
    borderRadius: 5,
  },
  input_descript: {
    width: 350,
    height: 350,
    borderColor: COLORS.input_border,
    borderWidth: 1,
    borderRadius: 5,
  },
  text: {
    alignSelf: 'center',
    fontSize: 14,
  },
  button_add: {
    backgroundColor: COLORS.main,
    borderRadius: 50,
    padding: 15,
    opacity: 0.5,
    borderColor: COLORS.border_but_color,
  },
  but_container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  but: {
    flex: 0,
    backgroundColor: COLORS.main,
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
});

// const postItem = async () => {
//   try {
//     await AsyncStorage.setItem(
//       props.email,
//       JSON.stringify([...props.todoList, state]),
//     );
//     props.addItem(state);
//     props.navigation.navigate(ROUTES.TodoList);
//   } catch (error) {
//     console.log(`Error ${error}`);
//   }
// };
