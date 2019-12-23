/** @jsx jsx */
import { useState } from 'react';
import { css, jsx } from '@emotion/core';

export interface TodosGroupProps {
    name: string;
    todos?: object;
}

export interface TodoItem {
    name: string;
    isCompleted: boolean;
    key: any;
}


const TodosGroup = ({ name }: TodosGroupProps) => {
  const [todosItems, setTodosItems] = useState([]);
  const [newTodoName, setNewTodoName] = useState('');
  const addTodoItem = (newTodo: TodoItem): void => {
    setTodosItems([...todosItems, newTodo]);
  };
  const handleNewTodoChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewTodoName(e.target.value);
  };
  const handleClick = (): void => {
    addTodoItem({
      name: newTodoName,
      isCompleted: false,
      key: Date.now(),
    });
    setNewTodoName('');
  };
  const handleCheck = (index: number) => {
    setTodosItems(todosItems.map((todo, todoIndex) => (todoIndex === index
      ? { ...todo, isCompleted: !todo.isCompleted }
      : todo)));
  };
  return (
    <div css={css`
      border: 2px solid rgba(33,33,33,0.5);
      border-radius: 8px;
      padding: 1rem;
    `}
    >
      <h1>
        {name}
      </h1>
      <ul>
        {todosItems ? todosItems.map((x: TodoItem, index: number) => (
          <li key={x.key} className="todoItem">
            <input onChange={() => handleCheck(index)} checked={x.isCompleted} type="checkbox" name={x.name} />
            <p>{x.name}</p>
          </li>

        )) : '' }
      </ul>
      <input type="text" value={newTodoName} onChange={handleNewTodoChange} />
      <button type="button" onClick={handleClick}>Add todo</button>
    </div>
  );
};

export default TodosGroup;
