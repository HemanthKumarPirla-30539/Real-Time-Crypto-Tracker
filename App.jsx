import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { simulateUpdate } from './assetsSlice';
import CryptoTable from './CryptoTable';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(simulateUpdate());
    }, 1500);
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="App">
      <h1>💸 Real-Time Crypto Tracker</h1>
      <CryptoTable />
    </div>
  );
}

export default App;
