import './App.css';
import { changeGeneration, selectGeneration } from './store/slice/generation';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const generation = useSelector(selectGeneration);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={() => dispatch(changeGeneration("First"))}>
        First Generation
      </button>
      <button onClick={() => dispatch(changeGeneration("Second"))}>
        Second Generation
      </button>
      <div>Generation is {generation}</div>
    </div>
  );
}

export default App;
