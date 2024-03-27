// src/components/Todo/TodoItem.jsx

import React from 'react';

const TodoItem = ({ todo, deleteTodo }) => {
  const { id, title, body, user } = todo;

  return (
    <tr className="bg-gray-700 text-white hover:bg-gray-600">
      <td className="px-4 py-2">{title}</td>
      <td className="px-4 py-2">{body}</td>
      <td className="px-4 py-2">{user}</td>
      <td className="px-4 py-2">
        <button
          className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mr-2"
          onClick={() => deleteTodo(id)}
        >
          Delete
        </button>
        <button className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:bg-green-600">
          Edit
        </button>
      </td>
    </tr>
  );
};

export default TodoItem;
