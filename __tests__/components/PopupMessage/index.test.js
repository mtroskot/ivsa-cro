import React from 'react';
import { Animated } from 'react-native';
import { shallow } from 'enzyme';
import { PopupMessage } from 'src/components';
import configureMockStore from 'redux-mock-store';
import styles from 'src/components/PopupMessage/styles';

jest.mock('react-native-safe-area-context', () => ({
  useSafeArea: jest.fn().mockReturnValue({ top: 20, bottom: 10 })
}));

const mockStore = configureMockStore();

describe('PopupMessage wrapper', () => {
  it('PopupMessage renders correctly,message on top', () => {
    const store = mockStore({
      ui: {
        popupMessage: {
          message: 'message',
          position: 'top'
        }
      }
    });
    const wrapper = shallow(<PopupMessage store={store} />)
      .dive()
      .dive();
    expect(wrapper.first().type()).toEqual(Animated.View);
    expect(wrapper.find('AnimatedComponent')).toHaveLength(1);
    expect(wrapper.find('AnimatedComponent').prop('style')[1].top).toEqual(styles.topPosition.top + 20);
    expect(wrapper.find('Text')).toHaveLength(1);
    expect(wrapper.find('Text').props().children).toEqual('message');
    expect(wrapper).toMatchSnapshot();
  });
  it('PopupMessage renders correctly,message at bottom', () => {
    const store = mockStore({
      ui: {
        popupMessage: {
          message: 'message',
          position: 'bottom'
        }
      }
    });
    const wrapper = shallow(<PopupMessage store={store} />)
      .dive()
      .dive();
    expect(wrapper.first().type()).toEqual(Animated.View);
    expect(wrapper.find('AnimatedComponent')).toHaveLength(1);
    expect(wrapper.find('AnimatedComponent').prop('style')[1].bottom).toEqual(styles.bottomPosition.bottom + 10);
    expect(wrapper.find('Text')).toHaveLength(1);
    expect(wrapper.find('Text').props().children).toEqual('message');
    expect(wrapper).toMatchSnapshot();
  });

  it('PopupMessage renders nothing, message is null', () => {
    const store = mockStore({
      ui: {
        popupMessage: {
          message: null,
          position: null
        }
      }
    });
    const wrapper = shallow(<PopupMessage store={store} />)
      .dive()
      .dive();
    expect(wrapper.first().type()).toEqual(null);
    expect(wrapper).toMatchSnapshot();
  });
});
