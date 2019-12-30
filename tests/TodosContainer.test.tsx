import React from 'react';
import { mount } from 'enzyme';
import TodosContainer from '../components/TodosContainer';
import TodosGroup from '../components/TodosGroup';
import { ErrorMessage } from '../components/ui/Input';

describe('App', () => {
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
  it('can render properly', () => {
    const wrapper = mount(<TodosContainer />);
    expect(wrapper).toBeTruthy();
  });
  it('can add todo group', () => {
    const wrapper = mount(<TodosContainer />);
    const input = wrapper.find('input[name="todo-container-form"]').simulate('change', { target: { value: 'Loy' } }).getDOMNode<HTMLInputElement>();
    wrapper.find('button').simulate('click');
    expect(input.value.length).toEqual(0);
    expect(wrapper.exists(TodosGroup)).toEqual(true);
  });
  it('cannot add a todo group with empty name', () => {
    const wrapper = mount(<TodosContainer />);
    wrapper.find('button').simulate('click');
    expect(wrapper.exists(TodosGroup)).toBe(false);
    expect(wrapper.exists(ErrorMessage)).toBe(true);
  });
  it('can preserve todo group', () => {
    const wrapper = mount(<TodosContainer />);
    wrapper.find('input[name="todo-container-form"]').simulate('change', { target: { value: 'Loy' } });
    wrapper.find('button').simulate('click');
    // eslint-disable-next-line no-undef
    wrapper.unmount();
    const newWrapper = mount(<TodosContainer />);
    expect(newWrapper.find(TodosGroup).first().prop('name')).toMatch('Loy');
  });
});
