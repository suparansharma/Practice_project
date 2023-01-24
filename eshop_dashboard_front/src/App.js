import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Add from './components/Add';
import Update from './components/Update';
import Protected from './components/Protected';//ProductList
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';

function App() {
 
  return (
    <div>
    <Header/>
    <Routes>
       {/* <Route path="/" element={ <Header/> } /> */}
       
       <Route path="/login" element={<Login/> } />
       <Route path="/register" element={<Register/> } />
       {/* <Route path="/add"  element={<Add/> }/>
       <Route path="/update"  element={<Update/> }/> */}
      <Route path="/add"  element={<Protected Component={Add}/> }/>
       <Route path="/update/:id"  element={<Protected Component={Update}/> } /> 
       <Route path="/"  element={<Protected Component={ProductList}/> } /> 
       <Route path="/search"  element={<Protected Component={SearchBar}/> } /> 
    </Routes>
    </div>
  );
}

export default App;
