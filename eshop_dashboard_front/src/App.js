import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Add from './components/Add';
import Update from './components/Update';
import Protected from './components/Protected';

function App() {
 
  return (
    <div>
    <Header/>
    <Routes>
       {/* <Route path="/" element={ <Header/> } /> */}
       <Route path="/login" element={<Login/> } />
       <Route path="/register" element={<Register/> } />
       <Route path="/add"  element={<Protected Component={Add}/> }/>
       <Route path="/update"  element={<Protected Component={Update}/> } />
    </Routes>
    </div>
  );
}

export default App;
