import * as React from 'react';
import {LoginScreenComp} from './login';
import {render, fireEvent} from '@testing-library/react-native';


describe('Login Screen Component', () => {
  it('Should match to snapshot', () => {
    const props = {
      getTodoList: jest.fn(),
      setEmail: jest.fn(),
    };
    const {asJSON} = render(<LoginScreenComp {...props} />); // saving screen snaphot structure as json in __snapshots__

    expect(asJSON()).toMatchSnapshot(); // checking is current structure are mached with saved snapshot
  });

  it('Should contain email input and submit button', () => {
    const props = { // mocking props
        getTodoList: jest.fn(),
        setEmail: jest.fn(),
    };
    const {getByTestId} = render(<LoginScreenComp {...props} />); // return pseudorender marcup structure 

    const input = getByTestId('loginInput'); // getting feld input from getByTestId 
    const button = getByTestId('loginButton'); // getting button ...

    expect(input).toBeTruthy(); // checking is input exist
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

      fireEvent.changeText(input, 'famousWomanInHistory') // setting mocked text to input
      fireEvent.press(button) // pressing but

      expect(props.setEmail).toHaveBeenCalledWith('famousWomanInHistory') // is function setEmail was called with mocked arguments 
  })
});

// TODO: Write tests for other component functions
