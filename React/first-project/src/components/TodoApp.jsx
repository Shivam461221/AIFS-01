import React, { useReducer, useState } from 'react';

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    case 'CLEAR_ALL':
      return [];
    default:
      return state;
  }
};

function TodoApp() {                                                                                         
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    if (input.trim() !== '') {
      dispatch({ type: 'ADD_TODO', payload: input });
      setInput('');
    }
  };

  const handleToggleTodo = (id) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  const handleDeleteTodo = (id) => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  const handleClearAll = () => {
    dispatch({ type: 'CLEAR_ALL' });
  };

  return (
    <div style={{ margin: '50px' }}>
      <h1>Todo App with useReducer 📝</h1>
      <input
        type="text"
        placeholder="Enter your todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearAll} style={{ marginLeft: '10px' }}>
        Clear All
      </button>

      <ul style={{ marginTop: '20px' }}>
        {todos.map(todo => (
          <li key={todo.id} style={{ marginBottom: '10px' }}>
            <span
              onClick={() => handleToggleTodo(todo.id)}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer',
              }}
            >
              {todo.id} {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(todo.id)} style={{ marginLeft: '10px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
