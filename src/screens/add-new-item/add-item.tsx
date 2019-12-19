import React, {useState} from 'react';
import {connect} from 'react-redux';
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
import {ITodoReducer} from '../todo-list/todo.reducer';
import {IStore} from '../../services/redux/reducer';

interface IState {
  title: string;
  description: string;
  photoUrl: string;
  video: string;
  location: string;
  id: number;
}

interface IProps extends NavigationInjectedProps {
  addItem: (settingObj: object) => object;
  email: string;
  todoList: object
}

const initialState = {
  title: '',
  description: '',
  photoUrl: '',
  video: '',
  location: '',
};

const AddItemComp = (props: ITodoReducer & IProps) => {
  const strings = STRINGS.ADD_ITEM;
  const [state, setState] = useState<IState>({
    ...initialState,
    id: Math.random(),
  });

  const iconsArr = [
    {icon: ICONS.location, route: 'location'},
    {icon: ICONS.photo, route: 'photo'},
    {icon: ICONS.video, route: 'video'},
  ]

  //   const onButPress = (route) => {
  //     props.navigation.navigate(route)
  //   }

  const postItem = async () => {
    try {
      AsyncStorage.setItem(
        props.email,
        JSON.stringify([...props.todoList, state]),
      );
      props.addItem(state);
      props.navigation.navigate(ROUTES.TodoList);
    } catch (error) {
      console.log('Error AsyncStorage item setting');
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
          style={[styles.input, styles.stucture_comp]}
          onChangeText={setTitle}
        />
      </View>
      <View style={styles.stucture_comp}>
        <Text>{strings.descript_text}</Text>
        <TextInput
          multiline={true}
          numberOfLines={4}
          style={[styles.input_descript, styles.stucture_comp]}
          onChangeText={setDescription}
        />
      </View>
      <View style={[styles.but_container, styles.stucture_comp]}>
        {iconsArr.map((obj, index) => {
          return (
            <TouchableOpacity key={index} style={styles.button_add}>
              <SvgUri width="30" height="30" source={obj.icon} />
            </TouchableOpacity>
          );
        })}
      </View>
      <TouchableOpacity
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
