import React, {useState} from 'react';
import {connect} from 'react-redux';
import {fetchData, postData} from '../../services/api-service';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {NavigationInjectedProps} from 'react-navigation';
import {ROUTES} from '../../constants/routes';
import {COLORS} from '../../constants/theme';
import {STRINGS} from '../../constants/strings';
import {setEmail} from './login.actions';
import {getTodoList} from '../todo-list/todo.actions';
import {TypesTodoList} from '../todo-list/todo.reducer';

export interface LoginProps extends NavigationInjectedProps {
  getTodoList: (parsedData: object) => void;
  setEmail: (email: string) => void;
}

// TODO: would be better to create login.state
export const LoginScreenComp = (props: LoginProps) => {
  const [email, setEmail] = useState('');

  const setEmailGoToList = (isLogin: boolean) => {
    if (email.length === 0) {
      return;
    }
    props.setEmail(email);
    isLogin ? getUserData(email) : createUser(email);
  };

  const getUserData = async (email: string) => {
    try {
      let {data} = await fetchData(`/users/${email.toLowerCase()}`);
      if (data) {
        props.getTodoList(data);
        props.navigation.navigate(ROUTES.TodoList);
      }
      return;
    } catch (error) {
      console.log('Getting api data error', error.message);
    }
  };

  const createUser = async (email: string) => {
    try {
      await postData(`/users/`, {email: email.toLowerCase(), data: []});
      props.navigation.navigate(ROUTES.TodoList);
      //props.getTodoList(data);
    } catch (error) {
      console.log('Creating new user error');
    }
  };

  return (
    <View style={styles.login_view}>
      <Text>{STRINGS.LOGIN.head_text}</Text>
      <TextInput
        style={[styles.input, styles.login_comp]}
        onChangeText={setEmail}
        testID="loginInput"
      />
      <TouchableOpacity
        style={[styles.but, styles.login_comp]}
        onPress={() => setEmailGoToList(true)}
        testID="loginButton">
        <Text style={styles.text}>{STRINGS.LOGIN.actionButton}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.but, styles.login_comp]}
        onPress={() => setEmailGoToList(false)}
        testID="registerButton">
        <Text style={styles.text}>{STRINGS.LOGIN.register}</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapDispatchToProps = {
  setEmail,
  getTodoList,
};

export const LoginScreen = connect(null, mapDispatchToProps)(LoginScreenComp);

const styles = StyleSheet.create({
  login_view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    margin: 15,
  },
  login_comp: {
    marginTop: 20,
  },
  input: {
    width: 350,
    height: 40,
    borderColor: COLORS.input_border,
    borderWidth: 1,
    borderRadius: 5,
  },
  text: {
    alignSelf: 'center',
    fontSize: 14,
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

// const getAsyncStorageData = async (email: string) => {
//   try {
//     const data = await AsyncStorage.getItem(email);
//     if (!data) {
//       return;
//     }
//     let parsedData = JSON.parse(data);
//     props.getTodoList(parsedData);
//   } catch (error) {
//     console.log(
//       'Getting async storage data error, or such storage does not exist.',
//     );
//   }
// };
