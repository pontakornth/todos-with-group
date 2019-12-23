import React, { useState } from 'react';
import { css } from 'emotion';
import TodosGroup from './TodosGroup';

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
      `
}
      >
        <input className="todoGroupName" value={groupName} onChange={changeName} />
        <button type="button" onClick={handleClick}>Add</button>
      </div>
      {todosGroups.length > 0 ? todosGroups.map((x) => (
        <div
          key={x.key}
          className={css`
           width: 90%;
           padding: 1rem;
        `}
        >
          <TodosGroup name={x.name} />
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
