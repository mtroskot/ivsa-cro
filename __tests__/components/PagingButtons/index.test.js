import React from 'react';
import { View } from 'react-native';
import { shallow } from 'enzyme';
import { PagingButtons } from 'src/components';
import styles from 'src/components/PagingButtons/styles';

describe('PagingButtons wrapper', () => {
  it('PagingButtons renders with label and value', () => {
    const props = {
      pagingButtons: ['1', '2', '>'],
      currentPage: 0,
      onPress: jest.fn()
    };
    const wrapper = shallow(<PagingButtons {...props} />);
    expect(wrapper.first().type()).toEqual(View);
    expect(wrapper.find('View')).toHaveLength(2);
    expect(wrapper.find('Memo(CustomButton)')).toHaveLength(3);
    expect(
      wrapper
        .find('Memo(CustomButton)')
        .at(0)
        .prop('text')
    ).toEqual('1');
    expect(
      wrapper
        .find('Memo(CustomButton)')
        .at(0)
        .prop('tOpacityStyle')[1].backgroundColor
    ).toEqual(styles.buttonSelected.backgroundColor);
    expect(
      wrapper
        .find('Memo(CustomButton)')
        .at(1)
        .prop('text')
    ).toEqual('2');
    expect(
      wrapper
        .find('Memo(CustomButton)')
        .at(1)
        .prop('tOpacityStyle')[1].backgroundColor
    ).toEqual(styles.buttonUnselected.backgroundColor);
    expect(
      wrapper
        .find('Memo(CustomButton)')
        .at(2)
        .prop('text')
    ).toEqual('>');
    expect(
      wrapper
        .find('Memo(CustomButton)')
        .at(2)
        .prop('tOpacityStyle')[1].backgroundColor
    ).toEqual(styles.buttonUnselected.backgroundColor);
    expect(wrapper).toMatchSnapshot();
  });
});
