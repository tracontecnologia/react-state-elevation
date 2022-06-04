import { useState } from 'react';
import { Count } from './Count';

export default function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      {isVisible && <Count />}
      <button onClick={() => setIsVisible((prev) => !prev)}>
        Toggle isVisible
      </button>
    </div>
  );
}
