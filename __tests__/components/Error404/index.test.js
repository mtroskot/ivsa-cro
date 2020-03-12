import React from 'react';
import { View } from 'react-native';
import { shallow } from 'enzyme';
import { Error404 } from 'src/components';
import sadFace from 'src/assets/images/emoji/sadFace.png';

describe('Error404 wrapper', () => {
  it('Error404 renders correctly  ', () => {
    const wrapper = shallow(<Error404 />);
    expect(wrapper.first().type()).toEqual(View);
    expect(wrapper.find('Image')).toHaveLength(1);
    expect(wrapper.find('Text')).toHaveLength(1);
    expect(
      wrapper
        .find('Image')
        .first()
        .prop('source')
    ).toEqual(sadFace);
    expect(wrapper.find('Text').props().children).toEqual('Oops Something went wrong');
    expect(wrapper).toMatchSnapshot();
  });
});
