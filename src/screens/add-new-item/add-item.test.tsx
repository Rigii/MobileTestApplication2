import * as React from 'react';
import {AddItemComp} from './add-item';
import {render, fireEvent, wait} from '@testing-library/react-native';
import {initialState} from './add-item';
//import AsyncStorageMock from '@react-native-community/async-storage/jest/async-storage-mock';

describe('Add item component', () => {
  const props = {
    addItem: jest.fn(),
    email: jest.fn() as any,
    todoList: [],
    navigation: {navigate: jest.fn()} as any,
  };
  const {getByTestId} = render(<AddItemComp {...props} />);
  const inputTitle = getByTestId('setTitle');
  const inputDescription = getByTestId('setDescription');
  const button = getByTestId('postBut');

  it('Should match to AddItem snapshot', () => {
    const {asJSON} = render(<AddItemComp {...props} />);
    expect(asJSON()).toMatchSnapshot();
  });

  it('Should call addItem with arguments', async () => {
    const mockedState = {
      title: 'famousManInHistory',
      description: 'famousWomanInHistory',
      photoUrl: '',
      video: '',
      location: '',
      id: initialState.id,
    };

    fireEvent.changeText(inputTitle, 'famousManInHistory');
    fireEvent.changeText(inputDescription, 'famousWomanInHistory');
    fireEvent.press(button);

    //AsyncStorageMock.setItem('Rigii', mockedState); // need to pass mocked data, to call setItem for avoid try{} err

    await wait(() => expect(props.addItem).toHaveBeenCalledWith(mockedState));
  });
});
