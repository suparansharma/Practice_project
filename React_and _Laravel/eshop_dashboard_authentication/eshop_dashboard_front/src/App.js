import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import Add_Product from './Component/Add_Product/Add_Product';
import Protected from './Component/Protected/Protected';

function App() {
  console.log("first")
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add" element={<Protected Component={Add_Product} />} />
      </Routes>
    </>
  );
}

export default App;
