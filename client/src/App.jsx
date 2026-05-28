import './App.css';

import Counter from './components/Counter';
import Timer from './components/Timer';
import FetchUsers from './components/FetchUsers';
import WindowResize from './components/WindowResize';

function App() {
  return (
    <div>
      <h1>React useEffect Hook</h1>

      <Counter />
      <hr />

      <Timer />
      <hr />

      <WindowResize />
      <hr />

      <FetchUsers />
    </div>
  );
}

export default App;