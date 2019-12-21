import React from 'react';
import { mount } from 'enzyme';
import TodosContainer from '../components/TodosContainer';
import TodosGroup from '../components/TodosGroup';

describe('App', () => {
  it('can render properly', () => {
    const wrapper = mount(<TodosContainer />);
    expect(wrapper).toBeTruthy();
  });
  it('can add todo group', () => {
    const wrapper = mount(<TodosContainer />);
    let input = wrapper.find('input').getDOMNode<HTMLInputElement>();
    input.value = 'Loy';
    wrapper.find('button').simulate('click');
    input = wrapper.find('input').getDOMNode<HTMLInputElement>();
    expect(input.value.length).toEqual(0);
    expect(wrapper.exists(TodosGroup)).toEqual(true);
  });
});
