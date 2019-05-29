import React from 'react';
import Links from '../../../src/components/links';
import { shallow } from '../../enzyme';


describe('Links component test', () => {

  it('render links', () => {
    const wrapper = shallow(
      <Links />
    );
    expect(wrapper.find('li').length).toBe(3);
  });

})