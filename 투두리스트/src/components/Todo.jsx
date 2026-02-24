import { useReducer, useState } from 'react';

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    default:
      return state;
  }
};

export default function Todo() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [text, setText] = useState('');

  const addTodo = (text) => {
    dispatch({ type: 'ADD_TODO', payload: text });
    setText('');
  };

  return (
    <div>
      <input className="input" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => addTodo(text)}>추가</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}
