import { memo, useState } from 'react';

function TodoComponent({ todos, append }) {
  const [todo, setTodo] = useState();

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
