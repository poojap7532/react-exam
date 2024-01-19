import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GET_DATA_PROGRESS } from './redux-saga/action/action';
import Data from './components/Data';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_DATA_PROGRESS })
  }, [])


  return (
    <>
      <Data />
    </>
  );
}

export default App;
