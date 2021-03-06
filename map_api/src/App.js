import logo from './logo.svg';
import './App.css';
import Map from './components/map';
import Direction from './components/Direction';
import { useState } from 'react';

function App() {
  const[origin,setOrigin]=useState('');
  const[destination,setDestination]=useState('');
  return (
    <div className="App">
      {/* <Map /> */}
      <input type="text" placeholder="Starting From" onBlur={e=>setOrigin(e.target.value)} />
      <input type="text" placeholder="Destination" onBlur={e=>setDestination(e.target.value)} />
      <Direction origin={origin} destination={destination} ></Direction>
    </div>
  );
}

export default App;
