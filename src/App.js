import { useState } from 'react';
import { Todo } from './Todo';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Add Count</button>
      <hr />
      <Todo />
    </div>
  );
}
