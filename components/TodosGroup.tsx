/** @jsx jsx */
import { useState } from 'react';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { TextInput } from './ui/Input';
import Button from './ui/Button';

export interface TodosGroupProps {
    name: string;
    todos?: object;
}

export interface TodoItem {
    name: string;
    isCompleted: boolean;
    key: any;
}

const TodoItemElement = styled.li`
  width: 100%;
  padding:1rem;
  border: 1px solid rgba(4,4,4,0.12);
`;

const TodosGroup = ({ name }: TodosGroupProps) => {
  const [todosItems, setTodosItems] = useState([]);
  const [newTodoName, setNewTodoName] = useState('');
  const addTodoItem = (newTodo: TodoItem): void => {
    setTodosItems([...todosItems, newTodo]);
  };
  const deleteTodo = ({ key } : TodoItem) => {
    setTodosItems(todosItems.filter((x) => x.key !== key));
  };
  const handleNewTodoChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewTodoName(e.target.value);
  };
  const handleClick = (): void => {
    if (newTodoName.length > 0) {
      addTodoItem({
        name: newTodoName,
        isCompleted: false,
        key: Date.now(),
      });
      setNewTodoName('');
    }
  };
  const handleCheck = (index: number) => {
    setTodosItems(todosItems.map((todo, todoIndex) => (todoIndex === index
      ? { ...todo, isCompleted: !todo.isCompleted }
      : todo)));
  };

  return (
    <div css={css`
      border: 1px solid rgba(33,33,33,0.2);
      border-radius: 8px;
      padding: 1rem;
    `}
    >
      <h1 css={css`
        text-align:center;
      `}
      >
        {name}
      </h1>
      <ul css={css`
        list-style: none;
        padding: 0;
      `}
      >
        {todosItems ? todosItems.map((todo: TodoItem, index: number) => (
          <TodoItemElement key={todo.key} css={css`position: relative`} className="todoItem">
            <input onChange={() => handleCheck(index)} checked={todo.isCompleted} type="checkbox" name={todo.name} />
            <p css={css`
            display:inline-block;
            padding: 0.5rem;
            `}
            >
              {todo.name}
            </p>
            <Button
              css={css`
              position: absolute;
              right: 1rem;

            `}
              onClick={() => deleteTodo(todo)}
            >
              Remove Todo
            </Button>
          </TodoItemElement>

        )) : '' }
      </ul>
      <div css={css`
        width: 100%;
      `}
      >
        <TextInput
          css={css`
          width: 100%;
          margin-bottom:1rem;
          margin-top: 1rem;
        `}
          type="text"
          value={newTodoName}
          onChange={handleNewTodoChange}
        />
        <Button css={css`width: 100%`} type="button" onClick={handleClick}>Add todo</Button>
      </div>
    </div>
  );
};

export default TodosGroup;
