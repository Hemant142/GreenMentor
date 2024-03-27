import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const { username, email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!username) {
      newErrors.username = 'Username is required';
    }
    if (!email) {
      newErrors.email = 'Email is required';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Here you can place your registration logic
    // For now, let's log the form data
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center text-white mb-6">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-white mb-1 ml-1">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleChange}
            className="w-full px-3 py-2 mt-1 text-white border rounded-lg bg-gray-800 focus:outline-none focus:ring focus:border-blue-300"
          />
          {errors.username && <p className="text-red-500 ml-1">{errors.username}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white mb-1 ml-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            className="w-full px-3 py-2 mt-1 text-white border rounded-lg bg-gray-800 focus:outline-none focus:ring focus:border-blue-300"
          />
          {errors.email && <p className="text-red-500 ml-1">{errors.email}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-white mb-1 ml-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            className="w-full px-3 py-2 mt-1 text-white border rounded-lg bg-gray-800 focus:outline-none focus:ring focus:border-blue-300"
          />
          {errors.password && <p className="text-red-500 ml-1">{errors.password}</p>}
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
