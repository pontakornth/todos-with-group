import React, { useState, useEffect } from 'react';
import { css } from 'emotion';
import TodosGroup from './TodosGroup';
import Button from './ui/Button';
import { TextInput, ErrorMessage } from './ui/Input';

interface ITodoGroup {
  name: string;
  key: any;
}

const TodosContainer = () => {
  const [todosGroups, setTodosGroups] = useState([]);
  const [groupName, setGroupName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    const prevTodoGroups: Array<ITodoGroup> = JSON.parse(window.localStorage.getItem('todos-group-names'));
    if (prevTodoGroups !== null && prevTodoGroups.length > 0) {
      setTodosGroups(prevTodoGroups);
    }
  }, []);
  const addTodoGroups = (todoGroup: ITodoGroup) => {
    const prevTodoGroups = [...todosGroups, todoGroup];
    setTodosGroups(prevTodoGroups);
    window.localStorage.setItem('todos-group-names', JSON.stringify(prevTodoGroups));
  };
  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGroupName(e.target.value);
  };
  const handleClick = () => {
    if (groupName.length > 0) {
      addTodoGroups({ name: groupName, key: Date.now() });
      setGroupName('');
      setErrorMessage('');
    } else {
      setErrorMessage('Group name must not be empty');
    }
  };
  return (
    <div className={
      css`
       width: 100%;
       display: flex;
       flex-wrap: wrap;
       justify-content: center;
      `
    }
    >
      <div className={
        css`
          width: 100%;
          display: flex;
          justify-content:center;
          padding: 1rem;
          align-items: baseline;
      `
}
      >
        {errorMessage.length > 0 ? <ErrorMessage css={css`width: 100%`}>{errorMessage}</ErrorMessage> : ''}
        <TextInput name="todo-container-form" className="todoGroupName" value={groupName} onChange={changeName} />
        <Button type="button" onClick={handleClick}>Add</Button>
      </div>
      {todosGroups.length > 0 ? todosGroups.map((todoGroup) => (
        <div
          key={todoGroup.key}
          className={css`
           width: 90%;
           padding: 1rem;
        `}
        >
          <TodosGroup name={todoGroup.name} />
        </div>
      )) : (
        <p>
        No todos group
        </p>
      )}
    </div>
  );
};

export default TodosContainer;
