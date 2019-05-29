import React from 'react';
import Form from '../../../src/components/form';
import { mount } from '../../enzyme';


describe('Links component test', () => {

  it('render links', () => {
    const wrapper = mount(
      <Form />
    );
    expect(wrapper.find('input').length).toBe(1);
    expect(wrapper.find('button').length).toBe(1);
  });

  it('# onChange ()', () => {
    const wrapper = mount(
      <Form />
    );
    wrapper.find('input').simulate('focus');
    wrapper.find('input').simulate('change', { target: { value: '13' } });
    wrapper.find('input').simulate('change', { target: { value: '1378' } });
    expect(wrapper.find('.js-error').length).toBe(1);
  });

  it('# reset prop', () => {
    const foo = {
      count: 0,
      setBar() {
        this.count ++;
      }
    };

    spyOn(foo, 'setBar');
    const wrapper = mount(
      <Form
        reset={foo.setBar}
      />
    );
    wrapper.find('button').simulate('click');
    expect(foo.setBar).toHaveBeenCalled();
  });

})