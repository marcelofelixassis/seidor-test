import React from 'react';
import { shallow } from 'enzyme';
import Cpf from '../cpf';
test('renders the component', () => {
  const component = shallow(<Cpf  disabled={false} name={"teste"} value={"123"} onChange={jest.fn()}/>);
  expect(component).toMatchSnapshot();
});