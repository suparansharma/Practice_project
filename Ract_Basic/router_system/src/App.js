import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Blog from './Components/Blog';
import Error from './Components/Error';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import BlogDetail from './Components/BlogDetail';
import Useer from './Components/Useer';

function App() {
  return (
    
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/blogs' element={<Blog/>}></Route>
      <Route path='/blogs/:title' element={<BlogDetail/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/user' element={<Useer/>}></Route>
      <Route path='*' element={<Error/>}></Route>
     </Routes>
     </BrowserRouter>
    
  );
}

export default App;
