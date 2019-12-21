import React from 'react';

export interface TodosGroupProps {
    name: string;
    todos?: object;
}

export interface TodoItem {
    name: string;
    isCompleted: boolean;
}

const TodosGroup = ({ name }: TodosGroupProps) => (
  <div className="todo-group">
    {name}
  </div>
);

export default TodosGroup;
