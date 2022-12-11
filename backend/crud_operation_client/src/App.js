
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AddUser from './Component/AddUser';
import Home from './Component/Home';

function App() {
  return (
    <div className="App">
<Routes>

  <Route path='/user/add' element={<AddUser></AddUser>}></Route>
  <Route path='/' element={<Home></Home>}></Route>
</Routes>
    </div>
  );
}

export default App;
