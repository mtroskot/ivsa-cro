import React from 'react';
import { TouchableOpacity } from 'react-native';
import { shallow } from 'enzyme';
import { IconButton } from 'src/components';

describe('IconButton wrapper', () => {
  it('IconButton renders correctly  ', () => {
    const props = {
      iconName: 'icon',
      onPress: jest.fn(),
      disabled: false
    };
    const wrapper = shallow(<IconButton {...props} />);
    expect(wrapper.first().type()).toEqual(TouchableOpacity);
    expect(wrapper.find('TouchableOpacity')).toHaveLength(1);
    expect(wrapper.find('Icon')).toHaveLength(1);
    expect(wrapper.find('TouchableOpacity').prop('disabled')).toEqual(props.disabled);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('interaction', () => {
  const props = {
    iconName: 'icon',
    onPress: jest.fn(),
    disabled: false
  };
  afterEach(() => {
    jest.clearAllMocks();
  });
  const wrapper = shallow(<IconButton {...props} />);
  it('pressing TouchableOpacity, should call the onPress callback', () => {
    wrapper
      .find('TouchableOpacity')
      .first()
      .prop('onPress')();
    expect(props.onPress).toHaveBeenCalledTimes(1);
  });
});
