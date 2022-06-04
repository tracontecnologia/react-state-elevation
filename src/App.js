import { useCallback, useState } from 'react';
import { Todo } from './Todo';

export default function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const append = useCallback((item) => {
    setTodos((prev) => {
      const copy = [...prev];
      copy.push(item);
      return copy;
    });
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Add Count</button>
      <hr />
      <Todo todos={todos} append={append} />
    </div>
  );
}
