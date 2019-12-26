import React from 'react';
// eslint-disable-next-line no-unused-vars
import Enzyme, { mount } from 'enzyme';
import TodosGroup from '../components/TodosGroup';

describe('TodosGroup Test', () => {
  function addOneTodo(name: string) : {wrapper: Enzyme.ReactWrapper, input: HTMLInputElement} {
    const wrapper = mount(<TodosGroup name="Task" />);
    const input = wrapper.find('input[type="text"]').first().simulate('change', { target: { value: name } }).getDOMNode<HTMLInputElement>();
    wrapper.find('button').simulate('click');
    return { wrapper, input };
  }
  it('can contain a todo item', () => {
    const { wrapper, input } = addOneTodo('Jojo');
    expect(input.value).toEqual('');
    expect(wrapper.find('li').text()).toMatch('Jojo');
  });
  it('can trigger a todo', () => {
    const { wrapper } = addOneTodo('done');
    const checkbox = wrapper.find('input[type="checkbox"]').first().simulate('change').getDOMNode<HTMLInputElement>();
    expect(checkbox.checked).toEqual(true);
  });
  it('can delete a todo', () => {
    const { wrapper } = addOneTodo('Zawarudo');
    wrapper.find('li button').first().simulate('click');
    expect(wrapper.exists('li')).toEqual(false);
  });
});
