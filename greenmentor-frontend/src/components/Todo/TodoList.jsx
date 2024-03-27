// src/components/Todo/TodoList.jsx

import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-white mb-4">Todo List</h2>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Body</th>
            <th className="px-4 py-2">User</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
