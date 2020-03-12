import React from 'react';
import { TouchableOpacity } from 'react-native';
import { shallow } from 'enzyme';
import { ListItem } from 'src/components';

describe('ListItem wrapper', () => {
  it('ListItem renders correctly without Image', () => {
    const props = {
      text: 'ListItem',
      textStyle: {},
      onPress: jest.fn()
    };
    const wrapper = shallow(<ListItem {...props} />);
    expect(wrapper.first().type()).toEqual(TouchableOpacity);
    expect(wrapper.find('TouchableOpacity')).toHaveLength(1);
    expect(wrapper.find('Text')).toHaveLength(1);
    expect(wrapper.find('Image')).toHaveLength(0);
    expect(wrapper.find('Text').props().children).toEqual(props.text);
    expect(wrapper).toMatchSnapshot();
  });
  it('ListItem renders correctly with Image', () => {
    const props = {
      text: 'ListItem',
      textStyle: {},
      imageProps: {
        imageSource: 'image',
        imageStyle: {}
      },
      onPress: jest.fn()
    };
    const wrapper = shallow(<ListItem {...props} />);
    expect(wrapper.first().type()).toEqual(TouchableOpacity);
    expect(wrapper.find('TouchableOpacity')).toHaveLength(1);
    expect(wrapper.find('Text')).toHaveLength(1);
    expect(wrapper.find('Image')).toHaveLength(1);
    expect(wrapper.find('Text').props().children).toEqual(props.text);
    expect(wrapper.find('Image').prop('source')).toEqual(props.imageProps.imageSource);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('interaction', () => {
  const props = {
    text: 'ListItem',
    textStyle: {},
    onPress: jest.fn()
  };
  afterEach(() => {
    jest.clearAllMocks();
  });
  const wrapper = shallow(<ListItem {...props} />);
  it('pressing TouchableOpacity, should call the onPress callback', () => {
    wrapper
      .find('TouchableOpacity')
      .first()
      .prop('onPress')();
    expect(props.onPress).toHaveBeenCalledTimes(1);
  });
});
