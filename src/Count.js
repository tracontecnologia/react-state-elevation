import { useState, useEffect } from 'react';

export function Count() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.count('Render');
    return () => {
      console.count('Clean up');
    };
  });

  useEffect(() => {
    console.count('Render Count');
  }, [count]);

  useEffect(() => {
    console.count('Render Empty Array');
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Add Count</button>
    </div>
  );
}
