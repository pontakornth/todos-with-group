import React, { useState } from 'react';
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
    <div className="Container">
      <input className="todoGroupName" value={groupName} onChange={changeName} />
      <button type="button" onClick={handleClick}>Add</button>
      {todosGroups.length > 0 ? todosGroups.map((x) => (
        <TodosGroup key={x.key} name={x.name} />
      )) : 'No todos group'}
    </div>
  );
};

export default TodosContainer;
