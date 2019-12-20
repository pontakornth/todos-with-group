import React from 'react';
import { shallow } from 'enzyme';
import TodosContainer from '../components/TodosContainer';

describe('App', () => {
  it('can render properly', () => {
    const wrapper = shallow(<TodosContainer />);
    expect(wrapper).toBeTruthy();
  });
});
