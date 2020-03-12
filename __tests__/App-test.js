import React from 'react';
import { shallow } from 'enzyme';
import App from 'src/App';

jest.mock('src/store', () => {
  return {};
});

describe('App wrapper', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
