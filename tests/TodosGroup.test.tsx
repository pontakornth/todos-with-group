import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import TodosGroup, { TodosGroupProps, TodoItem } from '../components/TodosGroup';

describe('TodosGroup Test', () => {
  function addOneTodo(name: string) : {wrapper: ReactWrapper, input: HTMLInputElement} {
    const wrapper = mount(<TodosGroup name="Task" />);
    const input = wrapper.find('input[type="text"]').first().getDOMNode<HTMLInputElement>();
    input.value = name;
    wrapper.find('button').simulate('click');
    return { wrapper, input };
  }
  it('can contain a todo item', () => {
    const { wrapper, input } = addOneTodo('Done');
    expect(input.value).toEqual('');
    expect(wrapper.text()).toMatch('Done');
  });
  it('can trigger a todo', () => {
    const { wrapper } = addOneTodo('done');
    const checkbox = wrapper.find('input[type="checkbox"]').first().simulate('change').getDOMNode<HTMLInputElement>();
    expect(checkbox.checked).toEqual(true);
  });
});
