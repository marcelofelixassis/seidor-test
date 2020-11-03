import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../layout';
test('renders the component', () => {
  const component = shallow(<Layout />);
  expect(component).toMatchSnapshot();
});