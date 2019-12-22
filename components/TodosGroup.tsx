import React, { useState } from 'react';

export interface TodosGroupProps {
    name: string;
    todos?: object;
}

export interface TodoItem {
    name: string;
    isCompleted: boolean;
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
    });
    setNewTodoName('');
  };
  const handleCheck = (index: number) => {
    setTodosItems([...todosItems.slice(0, index - 1),
      { ...todosItems[index], isCompleted: !todosItems[index].isCompleted },
      todosItems.slice(index + 1)]);
  };
  return (
    <div className="todo-group">
      <h1>
        {name}
      </h1>
      <ul>
        {todosItems ? todosItems.map((x: TodoItem, index: number) => (
          <li className="todoItem">
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
