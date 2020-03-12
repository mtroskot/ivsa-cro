import React from 'react';
import { Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native';
import { shallow } from 'enzyme';
import { KeyboardAvoidAndDismissView } from 'src/components';

describe('KeyboardAvoidAndDismissView wrapper', () => {
  it('KeyboardAvoidAndDismissView renders correctly  ', () => {
    const props = {
      children: (
        <View>
          <Text>Hello World</Text>
        </View>
      )
    };
    const wrapper = shallow(<KeyboardAvoidAndDismissView {...props} />);
    expect(wrapper.first().type()).toEqual(TouchableWithoutFeedback);
    expect(wrapper.find('TouchableWithoutFeedback')).toHaveLength(1);
    expect(wrapper.find('KeyboardAvoidingView')).toHaveLength(1);
    expect(wrapper.find('Text')).toHaveLength(1);
    expect(wrapper.find('View')).toHaveLength(1);
    expect(wrapper.find('KeyboardAvoidingView').prop('enabled')).toEqual(true);
    expect(wrapper.find('KeyboardAvoidingView').prop('behavior')).toEqual('padding');
    expect(wrapper.find('KeyboardAvoidingView').props().children).toEqual(props.children);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('interaction', () => {
  Keyboard.dismiss = jest.fn();
  afterEach(() => {
    jest.clearAllMocks();
  });
  const wrapper = shallow(<KeyboardAvoidAndDismissView />);
  it('tapping on TouchableWithoutFeedback, should call Keyboard.dismiss', () => {
    wrapper
      .find('TouchableWithoutFeedback')
      .first()
      .prop('onPress')();
    expect(Keyboard.dismiss).toHaveBeenCalledTimes(1);
  });
});
