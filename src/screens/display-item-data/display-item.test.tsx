import * as React from 'react';
import {DisplayItemDataComp} from './display-item-data';
import {render, fireEvent} from '@testing-library/react-native';

describe('Display item component', () => {
  const itemParams = {
    description:
      'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem',
    id: 125,
    location: 'dfgdfg',
    photoUrl: 'dfgdg',
    title: 'Go to daddy',
    video: 'dfgfg',
  };

  const props = {
    deleteItem: jest.fn(),
    navigation: {
      navigate: jest.fn(),
      getParam: jest.fn(() => itemParams), // Using a mock function (mock params)
    } as any,
  };

  const {getByTestId} = render(<DisplayItemDataComp {...props} />);

  it('Should match to DisplayItemDataComp snapshot', () => {
    const {asJSON} = render(<DisplayItemDataComp {...props} />);
    expect(asJSON()).toMatchSnapshot();
  });

  it('Should delete function if del button are pushed', () => {
    const delBut = getByTestId('delItem');
    fireEvent.press(delBut)
    expect(props.deleteItem).toHaveBeenCalled()
  });
  
});
