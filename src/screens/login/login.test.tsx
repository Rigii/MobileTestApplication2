import * as React from 'react';
import {LoginScreenComp} from './login';
import {render, fireEvent, wait} from '@testing-library/react-native';
import AsyncStorageMock from '@react-native-community/async-storage/jest/async-storage-mock';

describe('Login Screen Component', () => {
  const props = { // methods
    getTodoList: jest.fn(),
    setEmail: jest.fn(),
    navigation: {navigate: jest.fn()} as any,
  };
  const {getByTestId} = render(<LoginScreenComp {...props} />); // return pseudorender marcup structure
  const input = getByTestId('loginInput'); // getting feld input from getByTestId
  const button = getByTestId('loginButton'); // getting button ...

  it('Should match to snapshot', () => {
    const {asJSON} = render(<LoginScreenComp {...props} />); // saving screen snaphot structure as json in __snapshots__
    expect(asJSON()).toMatchSnapshot(); // checking is current structure are mached with saved snapshot
  });

  it('Should contain email input and submit button', () => {
    expect(input).toBeTruthy(); // checking is input exist
    expect(button).toBeTruthy();
  });

  it('Should call setEmail function with user email after button is pressed', () => {
    fireEvent.changeText(input, 'famousWomanInHistory'); // setting mocked text to input
    fireEvent.press(button); // pressing but

    expect(props.setEmail).toHaveBeenCalledWith('famousWomanInHistory'); // is function setEmail was called with mocked arguments
  });

  it('Should call getTodoList', async () => {
    AsyncStorageMock.getItem = jest
      .fn()
      .mockResolvedValue(JSON.stringify({id: 1, name: 'mock'}));

    fireEvent.changeText(input, 'Rigii'); // setting mocked text to input
    fireEvent.press(button); // pressing but

    await wait(() =>
      expect(props.getTodoList).toHaveBeenCalledWith({id: 1, name: 'mock'}),
    );
  });

});
