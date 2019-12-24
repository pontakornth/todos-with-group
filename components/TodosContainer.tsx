import React, { useState } from 'react';
import { css } from 'emotion';
import TodosGroup from './TodosGroup';
import Button from './ui/Button';
import { TextInput } from './ui/Input';

interface ITodoGroup {
  name: string;
  key: any;
}

const TodosContainer = () => {
  const [todosGroups, setTodosGroups] = useState([]);
  const [groupName, setGroupName] = useState('');
  const addTodoGroups = (todoGroup: ITodoGroup) => {
    setTodosGroups([...todosGroups, todoGroup]);
  };
  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGroupName(e.target.value);
  };
  const handleClick = () => {
    addTodoGroups({ name: groupName, key: Date.now() });
    setGroupName('');
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
