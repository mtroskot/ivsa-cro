import React from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import { shallow } from 'enzyme';
import { CustomButton } from 'src/components';

describe('CustomButton wrapper', () => {
  it('CustomButton renders button with text, no icon', () => {
    const props = {
      text: 'text',
      onPress: jest.fn()
    };
    const wrapper = shallow(<CustomButton {...props} />);
    expect(wrapper.first().type()).toEqual(TouchableOpacity);
    expect(wrapper.find('View')).toHaveLength(1);
    expect(wrapper.find('Text')).toHaveLength(1);
    expect(wrapper.find('Icon')).toHaveLength(0);
    expect(wrapper.find('Text').props().children).toEqual(props.text);
    expect(wrapper).toMatchSnapshot();
  });

  it('CustomButton renders button with icon, no text', () => {
    Platform.OS = 'android';
    const props = {
      iconProps: { name: 'menu' },
      onPress: jest.fn()
    };
    const wrapper = shallow(<CustomButton {...props} />);
    expect(wrapper.first().type()).toEqual(TouchableOpacity);
    expect(wrapper.find('View')).toHaveLength(2);
    expect(wrapper.find('Text')).toHaveLength(0);
    expect(wrapper.find('Icon')).toHaveLength(1);
    expect(wrapper.find('Icon').prop('name')).toEqual('md-' + props.iconProps.name);
    expect(wrapper).toMatchSnapshot();
  });

  it('CustomButton renders button with icon or text,icon on the left', () => {
    Platform.OS = 'ios';
    const props = {
      iconProps: { name: 'menu' },
      text: 'text',
      onPress: jest.fn()
    };
    const wrapper = shallow(<CustomButton {...props} />);
    expect(wrapper.first().type()).toEqual(TouchableOpacity);
    expect(wrapper.find('View')).toHaveLength(2);
    expect(wrapper.find('Text')).toHaveLength(1);
    expect(wrapper.find('Icon')).toHaveLength(1);
    expect(wrapper.find('Icon').prop('name')).toEqual('ios-' + props.iconProps.name);
    expect(wrapper.find('Text').props().children).toEqual(props.text);
    expect(wrapper.find('View + Text').length).toBe(1);
    expect(wrapper.find('Text + View').length).toBe(0);
    expect(wrapper).toMatchSnapshot();
  });

  it('CustomButton renders button with icon or text,icon on the right', () => {
    Platform.OS = 'ios';
    const props = {
      iconProps: { name: 'menu', rightSide: true },
      text: 'text',
      onPress: jest.fn()
    };
    const wrapper = shallow(<CustomButton {...props} />);
    expect(wrapper.first().type()).toEqual(TouchableOpacity);
    expect(wrapper.find('View')).toHaveLength(2);
    expect(wrapper.find('Text')).toHaveLength(1);
    expect(wrapper.find('Icon')).toHaveLength(1);
    expect(wrapper.find('Icon').prop('name')).toEqual('ios-' + props.iconProps.name);
    expect(wrapper.find('Text').props().children).toEqual(props.text);
    expect(wrapper.find('View + Text').length).toBe(0);
    expect(wrapper.find('Text + View').length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('interaction', () => {
  const props = {
    text: 'text',
    onPress: jest.fn()
  };
  afterEach(() => {
    jest.clearAllMocks();
  });
  const wrapper = shallow(<CustomButton {...props} />);
  it('pressing TouchableOpacity, should call the onPress callback', () => {
    wrapper
      .find('TouchableOpacity')
      .first()
      .prop('onPress')();
    expect(props.onPress).toHaveBeenCalledTimes(1);
  });
});
