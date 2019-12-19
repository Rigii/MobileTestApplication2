import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  AsyncStorage,
} from 'react-native';
import {NavigationInjectedProps} from 'react-navigation';
import {ROUTES} from '../../constants/routes';
import {COLORS} from '../../constants/theme';
import {STRINGS} from '../../constants/strings';
import {setEmail} from './login.actions';
import {getTodoList} from '../todo-list/todo.actions';
import {TypesTodoList} from '../todo-list/todo.reducer';
import { fireEvent, render, wait } from '@testing-library/react-native';

interface LoginProps  extends NavigationInjectedProps { 
  getTodoList: (parsedData: string) => void;
  
}


// TODO: add snapshot test here, shallow test
// mock props method with jest.fn() and test that it was called
export const LoginScreenComp = (props: LoginProps) => {
  const [email, setEmail] = useState('');

  const setEmailGoToList = () => {
    if (email.length === 0) {
      return;
    }
    props.setEmail(email);
    getAsyncStorageData(email);
    props.navigation.navigate(ROUTES.TodoList);
  };

  const getAsyncStorageData = async (email: string) => {
    try {
      const data = await AsyncStorage.getItem(email);
      if (!data) {
        return;
      }
      let parsedData = JSON.parse(data);
      props.getTodoList(parsedData);
    } catch (error) {
      console.log(
        'Getting async storage data error, or such storage does not exist.',
      );
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
        onPress={setEmailGoToList}
        testID="loginButton"
        >
        <Text style={styles.text}>{STRINGS.LOGIN.actionButton}</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapDispatchToProps = {
  setEmail,
  getTodoList,
};

export const LoginScreen = connect(null, mapDispatchToProps)(LoginScreenComp);


// test('examples of some things', async () => {
//   const { getByTestId, getByText, queryByTestId, baseElement } = render(<LoginScreenComp />);
//   const famousWomanInHistory = 'Ada Lovelace';
 
//   const input = getByTestId('input');
//   fireEvent.changeText(input, famousWomanInHistory);
 
//   const button = getByText('Print Username');
//   fireEvent.press(button);
 
//   await wait(() => expect(queryByTestId('printed-username')).toBeTruthy());
 
//   expect(getByTestId('printed-username').props.children).toBe(famousWomanInHistory);
//   expect(baseElement).toMatchSnapshot();
// });



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
