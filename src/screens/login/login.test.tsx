import * as React from 'react';
import {LoginScreenComp} from './login';
import {render, fireEvent} from '@testing-library/react-native';


describe('Login Screen Component', () => {
  it('Should match to snapshot', () => {
    const props = {
      getTodoList: jest.fn(),
      setEmail: jest.fn(),
    };
    const {asJSON} = render(<LoginScreenComp {...props} />);

    expect(asJSON()).toMatchSnapshot(); // snapshot settings 
  });

  it('Should contain email input and submit button', () => {
    const props = {
        getTodoList: jest.fn(),
        setEmail: jest.fn(),
    };
    const {getByTestId} = render(<LoginScreenComp {...props} />); // return pseudorender marcup structure 

    const input = getByTestId('loginInput'); // getting feld
    const button = getByTestId('loginButton');

    expect(input).toBeTruthy(); // checking is input is exist
    expect(button).toBeTruthy()
  });

  it('Should call setEmail function with user email after button is pressed', () => {
    const props = {
        getTodoList: jest.fn(),
        setEmail: jest.fn(),
        navigation: {navigate: jest.fn()}
    };
    const {getByTestId} = render(<LoginScreenComp {...props} />);

    const input = getByTestId('loginInput');
    const button = getByTestId('loginButton');

      fireEvent.changeText(input, 'famousWomanInHistory')
      fireEvent.press(button)

      expect(props.setEmail).toHaveBeenCalledWith('famousWomanInHistory') // is function setEmail was called with mocked arguments 
  })
});
