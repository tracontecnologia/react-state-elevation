import { memo, useState } from 'react';

function TodoComponent() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState();

  function append(item) {
    setTodos((prev) => {
      const copy = [...prev];
      copy.push(item);
      return copy;
    });
  }

  console.count('Render Todo');

  return (
    <div>
      <input onChange={(e) => setTodo(e.target.value)} />
      <button onClick={() => append(todo)}>Add</button>
      <hr />
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export const Todo = memo(TodoComponent);
