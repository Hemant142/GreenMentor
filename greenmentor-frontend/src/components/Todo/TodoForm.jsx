// src/components/Todo/TodoForm.jsx

import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !body) return;
    addTodo({
      title,
      body,
    });
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex flex-col mb-2">
        <label htmlFor="title" className="text-white">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 rounded-lg bg-gray-800 text-white"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="body" className="text-white">
          Body
        </label>
        <textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="p-2 rounded-lg bg-gray-800 text-white"
        ></textarea>
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
