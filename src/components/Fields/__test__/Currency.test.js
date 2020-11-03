import React from 'react';
import { shallow } from 'enzyme';
import Currency from '../currency';

describe('Test currency input', () => {
    it('basic snapshot render', () => {
        const component = shallow(<Currency  name={"teste"} value={"123"} onChange={jest.fn()}/>);
        expect(component).toMatchSnapshot();
    })
});