import React from 'react';


interface TodoItem {
    title: string;
    isFinished: boolean;
}

type TodosList = Array<TodoItem>;
interface TodosGroup {
    name: string;
    todosList: TodosList;
}

interface TodosContainerProps {
    todosGroups: Array<TodosGroup>;
}

const TodosContainer = (props: TodosContainerProps) => (
  <div className="Container">
    {props ? 'ho' : 'ha '}
  </div>
);

export default TodosContainer;
