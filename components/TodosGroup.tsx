import React from 'react';

interface TodosGroupProps {
    name: string;
    todos?: object;
}

const TodosGroup = ({ name }: TodosGroupProps) => (
  <div className="todo-group">
    {name}
  </div>
);

export default TodosGroup;
