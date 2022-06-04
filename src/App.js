import { Card } from './components';
import './index.css';

export default function App() {
  return (
    <div>
      <Card>
        <h1>Esse é o título do meu card</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          sequi praesentium consectetur quis quisquam laborum porro expedita in
          vitae incidunt voluptatem quas, aperiam assumenda non tempore ipsum
          rem optio corporis.
        </p>
        <div>
          <button>Cancelar</button>
          <button>OK</button>
        </div>
      </Card>

      <Card>
        <p>
          quis quisquam laborum porro expedita in vitae incidunt voluptatem
          quas, aperiam assumenda non tempore ipsum rem optio corporis.
        </p>
      </Card>

      <Card>
        <div>
          <button>Cancelar</button>
          <button>OK</button>
        </div>
      </Card>
    </div>
  );
}
