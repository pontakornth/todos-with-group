import React, { useState } from 'react';

const TodosContainer = () => {
  const [todosGroups, setTodosGroups] = useState(['1']);
  const [groupName, setGroupName] = useState('');
  const addTodoGroups = (todoGroup: string) => {
    setTodosGroups([...todosGroups, todoGroup]);
  };
  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGroupName(e.target.value);
  };
  const handleClick = () => {
    addTodoGroups(groupName);
  };
  return (
    <div className="Container">
      <input value={groupName} onChange={changeName} />
      <button type="button" onClick={handleClick}>Add</button>
      {todosGroups.map((x) => (<h1>{x}</h1>))}
    </div>
  );
};

export default TodosContainer;
