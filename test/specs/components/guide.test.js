import React from 'react';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';
import Guide from '../../../src/components/guide';
import { mount } from '../../enzyme';
import mockState from '../fixtures/state';


// here it is possible to pass in any middleware if needed into //configureStore
const mockStore = configureStore();
let wrapper;
let store;
beforeEach(() => {
  // 创建关联 store
  store = mockStore(mockState);
  wrapper = mount(<Provider store={store}><Guide /></Provider>)
});
describe('Links component test', () => {
  it('render movies and tags', () => {
    expect(wrapper.find('.movie-item').length).toBe(2);
    expect(wrapper.find('.tag-item').length).toBe(2);
  });
});
