import React from 'react';
import { TextInput, View } from 'react-native';
import { shallow } from 'enzyme';
import { FloatingLabelTextInput } from 'src/components';
import TestRenderer from 'react-test-renderer';

describe('FloatingLabelTextInput wrapper', () => {
  it('FloatingLabelTextInput renders with label and value', () => {
    const props = {
      value: 'value',
      onChangeText: jest.fn(),
      placeholder: 'placeholder',
      floatingLabel: 'floatingLabel'
    };
    const wrapper = shallow(<FloatingLabelTextInput {...props} />);
    expect(wrapper.first().type()).toEqual(View);
    expect(wrapper.find('View')).toHaveLength(2);
    expect(wrapper.find('TextInput')).toHaveLength(1);
    expect(wrapper.find('AnimatedComponent')).toHaveLength(1);
    expect(wrapper.find('AnimatedComponent').props().children).toEqual(props.floatingLabel);
    expect(wrapper.find('TextInput').prop('value')).toEqual(props.value);
    expect(wrapper.find('TextInput').prop('placeholder')).toEqual(undefined);
    expect(wrapper).toMatchSnapshot();
  });

  it('FloatingLabelTextInput renders value without label,floatingLabel', () => {
    const props = {
      value: 'value',
      onChangeText: jest.fn(),
      placeholder: undefined,
      floatingLabel: undefined
    };
    const wrapper = shallow(<FloatingLabelTextInput {...props} />);
    expect(wrapper.first().type()).toEqual(View);
    expect(wrapper.find('View')).toHaveLength(2);
    expect(wrapper.find('TextInput')).toHaveLength(1);
    expect(wrapper.find('AnimatedComponent')).toHaveLength(0);
    expect(wrapper.find('TextInput').prop('value')).toEqual(props.value);
    expect(wrapper.find('TextInput').prop('placeholder')).toEqual(undefined);
    expect(wrapper).toMatchSnapshot();
  });

  it('FloatingLabelTextInput renders value and placeholder without floatingLabel', () => {
    const props = {
      value: 'value',
      onChangeText: jest.fn(),
      placeholder: 'placeholder',
      floatingLabel: undefined
    };
    const wrapper = shallow(<FloatingLabelTextInput {...props} />);
    expect(wrapper.first().type()).toEqual(View);
    expect(wrapper.find('View')).toHaveLength(2);
    expect(wrapper.find('TextInput')).toHaveLength(1);
    expect(wrapper.find('AnimatedComponent')).toHaveLength(0);
    expect(wrapper.find('TextInput').prop('value')).toEqual(props.value);
    expect(wrapper.find('TextInput').prop('placeholder')).toEqual(props.placeholder);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('interaction', () => {
  const props = {
    value: 'value'
  };
  jest.useFakeTimers();
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('typing should call onChangeText callback', done => {
    const testRenderer = TestRenderer.create(<FloatingLabelTextInput {...props} />);
    const testInstance = testRenderer.root;

    expect(testInstance.findByType(TextInput).props.value).toEqual(props.value);
    // TYPING
    TestRenderer.act(() => {
      testInstance.findByType(TextInput).props.onChangeText('abc');
      jest.runAllTimers();
      done();
    });
  });
});
