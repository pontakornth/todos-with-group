import React from 'react';
// eslint-disable-next-line no-unused-vars
import Enzyme, { mount } from 'enzyme';
import TodosGroup from '../components/TodosGroup';
import { ErrorMessage } from '../components/ui/Input';

describe('TodosGroup Test', () => {
  beforeAll(() => {
    // eslint-disable-next-line no-undef
    const window: any = {};
    window.localStorage = {
      getItem(key) {
        return this[key];
      },
      setItem(key, value) {
        this[key] = value;
      },
    };
    window.sessionStorage = window.localStorage;
  });
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
    expect(checkbox.checked).toBe(true);
  });
  it('can delete a todo', () => {
    const { wrapper } = addOneTodo('Zawarudo');
    wrapper.find('li button').first().simulate('click');
    expect(wrapper.exists('li')).toBe(false);
  });
  it('cannot add an empty todo', () => {
    const { wrapper } = addOneTodo('');
    expect(wrapper.exists('li')).toBe(false);
    expect(wrapper.exists(ErrorMessage)).toBe(true);
  });
  it('can preserve todo list', () => {
    const { wrapper } = addOneTodo('za');
    wrapper.unmount();
    const newWrapper = mount(<TodosGroup name="Task" />);
    expect(newWrapper.find('li').first().text()).toMatch('za');
  })
});
