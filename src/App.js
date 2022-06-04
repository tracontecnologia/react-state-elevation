import { useMemo, useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [aux, setAux] = useState(0);
  const expensiveValue = useMemo(() => calculateExpensiveValue(aux), [aux]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Add Count</button>
      <p>Aux: {aux}</p>
      <button onClick={() => setAux((prev) => prev + 1)}>Add Aux</button>
      <hr />
      <p>Expensive Value: {expensiveValue}</p>
    </div>
  );
}

function calculateExpensiveValue(aux) {
  let total = aux;
  for (let i = 0; i < 100000000; i++) {
    total += i;
  }
  return total;
}
