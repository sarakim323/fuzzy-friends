import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Discovery from './Discovery';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="flex flex-col">
        <div className="p-2 bg-black rounded-lg hover:bg-regal-blue hover:scale-150">
          hello
        </div>
        <div className="p-2">hello</div>
        <div className="p-2">hello</div>
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Discovery />
    </div>
  );
}

export default App;
